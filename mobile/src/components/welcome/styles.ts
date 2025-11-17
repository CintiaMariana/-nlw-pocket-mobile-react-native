import { StyleSheet } from "react-native";
import {colors, fontFamily} from "@/styles/theme";

export const s = StyleSheet.create({
    logo: {
        width: 48, //largura
        height: 48, //altura
        marginTop: 24, //margem superior
        marginBottom: 28 //margem inferior
    },
    title: {
        fontSize: 24, //tamanho da fonte
        fontFamily: fontFamily.bold, 
        color: colors.gray[600] //cor do texto
    },
    subtitle: {
        fontSize: 16, //tamanho da fonte
        fontFamily: fontFamily.regular,
        color: colors.gray[500], //cor do texto
        marginTop: 12, //margem superior
    },

})