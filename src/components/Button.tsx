import React from 'react';
import { 
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

//type ButtonProps = TouchableOpacityProps  //type, estou criando meu TIPO

interface ButtonProps extends TouchableOpacityProps {
    // dessa forma terá todas as props que um touchableOpacity tem, mais aquelas que quero adicionar juntamente
    title: string,
}

//agora digo que o meu Buton, o tipo dele é ButtonProps
// ...rest = pega todas as propriedades que vim no ButtonProps
export function Button( { title, ...rest } : ButtonProps ){ // pego a propriedade passada lá
    return(
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7} // 70%
            
            { ...rest } // no onPress do TouchableOpacity passo a propriedade que peguei, posso nomear ela como quiser
            //aqui foi tirado o onPress e colocado apenas o ...rest
            //no Button da Home na linha 90 o Button já terá o onPress
        >
            <Text 
                style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    
})