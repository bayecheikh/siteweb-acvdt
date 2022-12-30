export default () => ({
    listcontenus: [],

    headercontenus : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Titre', value: 'titre' },
        { text: 'Categorie', value: 'categories',sortable: true },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailcontenu :{}
})