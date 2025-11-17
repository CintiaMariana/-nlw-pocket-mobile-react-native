import { StyleSheet} from "react-native";

export const s = StyleSheet.create({
    container: {
        maxHeight: 36, // altura máxima da lista de categorias
        position: "absolute", // deixa a lista de categorias por cima de outros componentes
        zIndex: 1, // garante que a lista fique acima de outros elementos
        top: 64, // distância do topo da tela
    },
    content: {
        gap: 8, // espaçamento entre os itens da lista
        paddingHorizontal: 24, // espaçamento horizontal
    }
})