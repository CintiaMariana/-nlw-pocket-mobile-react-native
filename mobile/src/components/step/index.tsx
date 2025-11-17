import { Text, View } from "react-native";
import {IconProps} from "@tabler/icons-react-native"

import {colors} from "@/styles/theme";
import { s } from "./styles";

// Definindo o tipo das props esperadas
type Props = {
    title: string;
    description: string;
    icon: React.ComponentType<IconProps>;
}

// Componente Step que recebe título e descrição como props
export function Step({title, description, icon: Icon}: Props) {
    return (
        <View style={s.container}>
            {Icon && <Icon size={32} color={colors.red.base} />} // Renderiza o ícone se fornecido

            <View style={s.details}>
                <Text style={s.title}>{title}</Text>
                <Text style={s.description}>{description}</Text>
            </View>
        </View>
    )
}