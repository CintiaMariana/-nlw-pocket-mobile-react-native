import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        width: "100%", // ocupa a largura total
        flexDirection: "row", // alinha os itens na horizontal
        gap: 16, // espaçamento entre os itens
    }, 
    details: {
        flex: 1, // ocupa o espaço restante
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600],
    },
    description:{
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 4, // espaçamento entre o título e a descrição
    },

})