export default {
    data() {
        return {
            perPage: 5,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredEntityList.length / this.perPage);
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.filteredEntityList.slice(start, end);
        },
        currentPage() {
            return parseInt(this.$route.query.drawer) || 1;
        },
    },
    methods: {
        changePage(pageNumber) {
            this.$router.push({ query: { drawer: pageNumber } });
        }
    },
    beforeMount() {
        if (this.currentPage > this.totalPages) this.changePage(this.totalPages);
        else if (this.currentPage < 1) this.changePage(1);
    },
};