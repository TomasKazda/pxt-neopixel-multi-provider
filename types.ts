// Definice základních typů
type Color = {
    h: number,
    s: number,
    l: number
}

type Line = {
    data: Array<Color>,
    delay: number
}

// Rozhraní pro studentské implementace
interface SequenceProvider {
    init(length: number): void;
    nextLine(): Line;
}
