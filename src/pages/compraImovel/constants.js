export const ITEMS_LINE_CONFIG = [3, 4, 3, 3, 3, 1]; 
export const AMENITIES_LINE_CONFIG = [3, 2]; 

export const ITEMS = [
    "Guarda-roupa", "Frigobar", "Cama de casal",
    "Sacada", "Box blindex", "Chuveiro elétrico",
    "Pia", "Vaso sanitário", "Banheira",
    "Fogão elétrico", "Geladeira", "Microondas",
    "Forno elétrico", "Tanque", "Lava e seca roupas", "Sofá cama", "Televisão",
];

export const AMENITIES = ["Internet", "TV a cabo", "Televisão", "Ar condicionado"];

export const permissoes = [
    { texto: 'Pets são permitidos', permitido: true },
    { texto: 'Fumantes são permitidos', permitido: true },
    { texto: 'Casais são permitidos', permitido: true },
    { texto: 'Visitas não são permitidas', permitido: false },
    { texto: 'Crianças não são permitidas', permitido: false },
];

export const taxasMultas = [
    { icone: require('../../../assets/cleanIcon.png'), texto: 'Taxa de limpeza', valor: 'R$ 50,00' },
    { icone: require('../../../assets/shieldIco.png'), texto: 'Multa sobre avarias', valor: 'R$ 150,00' },
    { icone: require('../../../assets/moneyIcon.png'), texto: 'Taxa personalizada', valor: 'R$ 300,00' },
];