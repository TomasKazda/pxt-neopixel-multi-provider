namespace Knobloch {
    let stripLength: number = 0;
    const stripData: Array<Line> = [];
    
    function init(length: number): void {
        stripLength = length;
        stripData.splice(0, stripData.length)
        rebuildStrips();
    }

    function rebuildStrips() {

    }

    function nextLine(): Line {
        if (stripData.length === 0) {
            const colors: Array<Color> = [];
            for (let i = 0; i < stripLength; i++) {
                colors.push({ h: 0, s: 0, l: 0 });
            }
            return { data: colors, delay: 500 }
        };

        // todo


        return stripData[0];
    }

    // Exportovaný objekt implementující rozhraní
    export const provider: SequenceProvider = {
        init: init,
        nextLine: nextLine
    };
}