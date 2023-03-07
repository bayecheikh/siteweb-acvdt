export default () => ({
    listgestionrhs: [],

    headergestionrhs : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Référence', value: 'reference' },
        { text: 'Objet', value: 'objet' },
        { text: 'Date de publication', value: 'date_publication' },
        { text: 'Date limite', value: 'date_limite' },
        { text: 'Secteur', value: 'secteur' },
        { text: 'Categorie', value: 'categories',sortable: true },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailgestionrh :{}
})