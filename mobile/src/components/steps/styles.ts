import {StyleSheet} from "react-native"
import {colors, fontFamily} from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        gap: 24, // Espaçamento entre os passos
        flex: 1, // Permite que o container ocupe todo o espaço disponível
    },
    title:{
        fontSize: 16, // Tamanho da fonte do título
        fontFamily: fontFamily.regular,
        color: colors.gray[500], // Cor do texto do título
    }
})