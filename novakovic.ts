namespace Novakovic {
    let stripLength: number = 0;
    let position: number = 0;

    function init(length: number): void {
        stripLength = length;
        position = 0;
    }

    function nextLine(): Line {
        const colors: Array<Color> = [];

        // fake barevná sekvence, místo čerpání z připravených dat v poli
        for (let i = 0; i < stripLength; i++) {
            colors.push({
                h: ((i + position) * 360 / stripLength) % 360,
                s: 100,
                l: 50
            });
        }
        position = (position + 1) % stripLength;

        return {
            data: colors,
            delay: 100
        };
    }

    // Exportovaný objekt implementující rozhraní
    export const provider: SequenceProvider = {
        init: init,
        nextLine: nextLine
    };
}

