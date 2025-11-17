import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        backgroundColor: colors.green.base,
        borderRadius: 10, // bordas arredondadas
        alignItems: "center", // alinha horizontalmente ao centro
        justifyContent: "center", // alinha verticalmente ao centro
        flexDirection: "row", // organiza os elementos em linha
        gap: 14, // espaçamento entre os elementos
    },

    title: {
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
    },
});