import {TemplatePertanyaan} from "@/app/chat/interfaces";

export const templatePertanyaanIndonesia: TemplatePertanyaan[] = [
    {
        'pertanyaan': 'Jadwal keberangkatan paling terakhir Delanggu-Yogyakarta apa ya?',
        'topik': 'pelayananPublik'
    },
    {
        'pertanyaan': 'Undang-undang apa yang menjamin penyandang disabilitas berhak untuk menduduki jabatan publik?',
        'topik': 'hukum'
    },
    {
        'pertanyaan': 'Berapa banyak anak terlantar di Denpasar Timur pada tahun 2023?',
        'topik': 'openData'
    },
    {
        'pertanyaan': 'Apa isi UU no.8 tahun 2016 secara inti?',
        'topik': 'hukum'
    }
]

export const templatePertanyaanJawa: TemplatePertanyaan[] = [
    {
        'pertanyaan': 'Jadwal paling akhir Delanggu ning Yogya, jam piro yo?',
        'topik': 'pelayananPublik'
    },
    {
        'pertanyaan': 'Opo inti isine UU nomer wolu taun 2016?',
        'topik': 'hukum'
    },
    {
        'pertanyaan': 'Stasiun Endi wae sing iso nampung wong Nang stasiun Yogya?',
        'topik': 'pelayananPublik'
    },
    {
        'pertanyaan': 'Piye carane entok bantuan hukum?',
        'topik': 'hukum'
    }
]

export const templatePertanyaanSunda: TemplatePertanyaan[] = [
    {
        'pertanyaan': 'Tabuh sabaraha karéta pang akhirna tujuan ka Delanggu-Yogyakarta?',
        'topik': 'pelayananPublik'
    },
    {
        'pertanyaan': 'Naon inti ti UU No. 8 tahun 2016?',
        'topik': 'hukum'
    },
    {
        'pertanyaan': 'Sabaraha denda anu kedah dibayar pami nu masihan bantosan hukum nyuhunkeun bayaran ka nu nampi bantosan hukum?',
        'topik': 'hukum'
    },
    {
        'pertanyaan': 'Stasiun mana waé nu buka kanggo panumpang nu badé ka stasiun Yogyakarta?',
        'topik': 'pelayananPublik'
    }
]

export const templatePertanyaanBali: TemplatePertanyaan[] = [
    {
        'pertanyaan': 'Jam kuda keberangkatan kereta delanggu-jogjakarta sane paling wengi?',
        'topik': 'pelayananPublik'
    },
    {
        'pertanyaan': 'Napi daging inti UU No.8 tahun 2016?',
        'topik': 'hukum'
    },
    {
        'pertanyaan': 'Stasiun napi manten sane melayani penumpang sane jagi lunga ke stasiun Yogyakarta?',
        'topik': 'pelayananPublik'
    },
    {
        'pertanyaan': 'Sapunapi carane ngamolihang bantuan hukum?',
        'topik': 'hukum'
    },
]


export const salamPembuka: any = {
    'indonesia': 'Selamat datang',
    'jawa': 'Sugeng rawuh',
    'sunda': 'Wilujeng sumping',
    'bali': 'Rahajeng rauh'
}

export const kalimatBantuan: any = {
    'indonesia': 'Apa yang bisa saya bantu?',
    'jawa': 'Opo sing iso tak bantu?',
    'sunda': 'naon nu tiasa abdi bantos?',
    'bali': 'Napi sane dados titiang bantu?'
}

export const placeholderInput: any = {
    'indonesia': 'Tanyakan apa saja...',
    'jawa': 'Takon apa wae...',
    'sunda': 'Tanya nanaon...',
    'bali': 'Takonin napi manten...'
}