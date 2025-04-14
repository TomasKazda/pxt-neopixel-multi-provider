let strip: neopixel.Strip = null;
let currentProvider: SequenceProvider = null;
let providers: Array<SequenceProvider> = [];
let currentProviderIndex = 0;
let switchRequested: boolean = false;

const startOnce = (stripLength: number): void => {
    strip = neopixel.create(DigitalPin.P2, stripLength, NeoPixelMode.RGB);
    strip.setBrightness(50);

    // Registrace všech poskytovatelů sekvencí (studentů)
    providers = [
        NameTemplate.provider,
        Novakovic.provider,
        Kolinger.provider,
        
    ];

    for (let provider of providers) {
        provider.init(stripLength);
    }

    currentProvider = providers[0];
}

const switchToNextProvider = (): void => {
    currentProviderIndex = (currentProviderIndex + 1) % providers.length;
    currentProvider = providers[currentProviderIndex];
    basic.showNumber(currentProviderIndex);
}

startOnce(23); // 23 LED diod na pásku
basic.showNumber(currentProviderIndex);

basic.forever(() => {
    const line = currentProvider.nextLine();

    for (let i = 0; i < line.data.length; i++) {
        const color = line.data[i];
        strip.setPixelColor(i, neopixel.hsl(color.h, color.s, color.l));
    }
    strip.show();

    basic.pause(line.delay);

    if (switchRequested)
    {
        switchRequested = false;
        switchToNextProvider();
    }
})

input.onButtonPressed(Button.A, () => {switchRequested = true})