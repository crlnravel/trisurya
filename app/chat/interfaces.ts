export interface TemplatePertanyaan {
    pertanyaan: string
    topik: 'hukum' | 'pelayananPublik' | 'openData'
}

export interface Pesan {
    isi: string
    sender: 'bot' | 'user'
}