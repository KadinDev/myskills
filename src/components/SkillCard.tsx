import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    Text,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard( { skill, ...rest } : SkillCardProps ){ // skill como propriedade e passa abaixo
    return (
        <TouchableOpacity
            style={styles.buttonSkill} 
            activeOpacity={0.7} // 70%
            { ...rest }
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10
    },
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
})