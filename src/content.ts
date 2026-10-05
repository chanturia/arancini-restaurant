export const restaurant = {
  phone: '210 603 4847',
  telephone: 'tel:+302106034847',
  address: 'Λεωφ. Μαραθώνος 56',
  city: 'Παλλήνη, 153 51',
  maps: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14a19bebd00b3651:0xf8017511ed12eaca',
  instagram: 'https://www.instagram.com/arancini_pallini/',
  facebook: 'https://www.facebook.com/p/Arancini-100089691944134/',
  wolt: 'https://wolt.com/el/grc/athens/restaurant/arancini',
  efood: 'https://www.e-food.gr/delivery/pallini/arancini-6293518',
} as const

export const navigation = [
  { href: '/', label: 'Αρχική' },
  { href: '/menu', label: 'Μενού' },
  { href: '/experience', label: 'Η εμπειρία' },
  { href: '/contact', label: 'Επικοινωνία' },
] as const

export const pageMetadata: Record<
  string,
  { title: string; description: string }
> = {
  '/': {
    title: 'Arancini — Ιταλική γεύση, στην Παλλήνη',
    description:
      'Arancini — Ιταλική κουζίνα στην Παλλήνη. Arancini, πίτσα και ζυμαρικά στη Λεωφόρο Μαραθώνος 56. Καλέστε στο 210 603 4847.',
  },
  '/menu': {
    title: 'Μενού | Arancini Παλλήνη',
    description:
      'Γνωρίστε τις γεύσεις του Arancini: arancini, πίτσα, ζυμαρικά, risotto, vegan επιλογές και tiramisù.',
  },
  '/experience': {
    title: 'Η εμπειρία | Arancini Παλλήνη',
    description:
      'Γνωρίστε τον χώρο και την ιταλική εμπειρία του Arancini στη Λεωφόρο Μαραθώνος 56, στην Παλλήνη.',
  },
  '/contact': {
    title: 'Επικοινωνία & πρόσβαση | Arancini Παλλήνη',
    description:
      'Βρείτε το Arancini στη Λεωφ. Μαραθώνος 56, Παλλήνη 153 51. Τηλέφωνο 210 603 4847, οδηγίες πρόσβασης και πληροφορίες επίσκεψης.',
  },
}

export function legacyDestination(search: string, hash: string): string | null {
  if (hash === '#visit') return '/contact'
  if (hash === '#experience') return '/experience'
  if (hash === '#menu' || new URLSearchParams(search).has('menu'))
    return `/menu${search}`
  return null
}

// Selected dishes verified against the public Wolt menu on 2026-10-05.
// Prices and a full dine-in menu require the owner's current catalogue.
export const menuCategories = [
  {
    id: 'arancini',
    label: 'Arancini',
    italian: 'Piccoli, ma speciali.',
    title: 'Μικρές μπουκιές.\nΜεγάλη αδυναμία.',
    image: '/images/arancini.jpg',
    alt: 'Arancini με παρμεζάνα, σε λευκή πιατέλα',
    dishes: [
      {
        name: 'Arancini Mozzarella',
        description: 'Με μαγιονέζα, λάιμ και μαρμελάδα ντομάτας.',
      },
      {
        name: 'Arancini Funghi',
        description: 'Με μαγιονέζα τρούφας και παρμεζάνα.',
      },
      {
        name: 'Arancini al Ragù',
        description: 'Με μαγιονέζα λεμονιού και σκόρδο.',
      },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    italian: 'Un altro spicchio?',
    title: 'Κάθε κομμάτι,\nμια καλή ιδέα.',
    image: '/images/pizza.jpg',
    alt: 'Πίτσα Margherita του Arancini',
    dishes: [
      {
        name: 'Margherita',
        description: 'Ντομάτα, μοτσαρέλα, παρμεζάνα, λάδι βασιλικού.',
      },
      {
        name: 'Prosciutto Rucola',
        description: 'Ντομάτα, μοτσαρέλα, ρόκα, παρμεζάνα, prosciutto.',
      },
      {
        name: 'Tartufo',
        description: 'Σάλτσα τρούφας, παρμεζάνα, μοτσαρέλα, burrata.',
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta & risotto',
    italian: 'Amore al primo assaggio.',
    title: 'Μια πιρουνιά\nείναι μόνο η αρχή.',
    image: '/images/pasta.jpg',
    alt: 'Πιρουνιά ζυμαρικών στο Arancini',
    dishes: [
      {
        name: 'Spaghetti Bolognese',
        description: 'Pomodoro, ντοματίνια, κιμάς μόσχου, παρμεζάνα.',
      },
      {
        name: 'Linguine Carbonara A La Creme',
        description: 'Μπέικον, παρμεζάνα, κρόκος αυγού, κρέμα γάλακτος.',
      },
      {
        name: 'Risotto Funghi',
        description: 'Μανιτάρια, τρούφα, παρμεζάνα, θυμάρι, βούτυρο.',
      },
    ],
  },
  {
    id: 'vegan',
    label: 'Vegan',
    italian: 'Il gusto, per tutti.',
    title: 'Ιταλική απόλαυση,\nμε vegan επιλογές.',
    image: null,
    alt: '',
    dishes: [
      {
        name: 'Vegan Margherita',
        description: 'Ντομάτα, φυτικό τυρί και λάδι βασιλικού.',
      },
      {
        name: 'Vegan Pomodoro',
        description: 'Ζυμαρικά με σάλτσα ντομάτας και λάδι βασιλικού.',
      },
    ],
  },
  {
    id: 'dolci',
    label: 'Dolci',
    italian: 'La dolce fine.',
    title: 'Κρατήστε χώρο\nγια το γλυκό.',
    image: null,
    alt: '',
    dishes: [
      { name: 'Tiramisù', description: 'Σαβαγιάρ, mascarpone και espresso.' },
    ],
  },
] as const

export type MenuCategoryId = (typeof menuCategories)[number]['id']

export function readMenuCategory(search: string): MenuCategoryId {
  const requested = new URLSearchParams(search).get('menu')
  return (
    menuCategories.find((category) => category.id === requested)?.id ??
    'arancini'
  )
}

export const questions = [
  {
    question: 'Πώς μπορώ να ρωτήσω για τραπέζι;',
    answer:
      'Καλέστε μας στο 210 603 4847 για διαθεσιμότητα και πληροφορίες. Θα χαρούμε να σας εξυπηρετήσουμε.',
  },
  {
    question: 'Υπάρχουν vegan επιλογές;',
    answer:
      'Στο μενού θα βρείτε vegan πίτσα και ζυμαρικά. Για τα υλικά, τα αλλεργιογόνα ή συγκεκριμένες διατροφικές ανάγκες, μιλήστε με την ομάδα μας πριν την παραγγελία.',
  },
  {
    question: 'Μπορώ να παραγγείλω στο σπίτι;',
    answer:
      'Θα μας βρείτε στη Wolt και στο efood. Η διαθεσιμότητα, οι τιμές και η περιοχή διανομής εμφανίζονται στην πλατφόρμα που θα επιλέξετε.',
  },
] as const
