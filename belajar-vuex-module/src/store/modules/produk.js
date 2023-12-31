import axios from "axios";

const produk = {
    namespaced: true,
    state: {
        produkData: [],
    },
    getters: {
        getproduk: (state) => state.produkData,
        getProdukById: (state) => (produkId) => {
            console.log("ProdukId:", produkId);
            console.log("ProdukData:", state.produkData);
            const produk = state.produkData.find((p) => p.id == produkId);
            console.log("Produk:", produk);
            return produk;
        }
    },
    actions: {
        async fetchproduk({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                commit("SET_PRODUK", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchSingleProduk({ commit }) {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products/$(produkId)"
                );
                commit("SET_SINGLE_PRODUK", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUK(state, produk) {
            state.produkData = produk;
        },
       SET_SINGLE_PRODUK(state, produk) {
        state.singleProduk = produk
       }
        },
};

export default produk