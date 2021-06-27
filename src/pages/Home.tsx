import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    Platform,
    FlatList, // lidar melhor com listas grandes
    StatusBar,
    Image
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


interface SkillData {
  id: string;
  name: string; // quando se tem : todos os atributos são obrigatórios
  //date?: Date; // quando se tem ? o atributo é opcional
}

export function Home(){
  // newSkill é o estado em SÍ e,
  // setNewSkill é a função que atualiza o estado
  const [newSkill, setNewSkill] = useState('');

  // estado para armazenar as skills, [] pq será várias, um array.
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  const [greeting, setGreeting] = useState('');
  
  // ideia de ter handle na frente, quando a function é disparada com a
  // interação de um usuário
  function handleAddNewSkill(){

    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    // oldState mas vc pode dar o nome que quiser
    // cria um new array com o estado que estava antes(oldState) adicionando o novo estado que está no newSkill
    // lembrando que o newSkill vai guardar a nova skill cadastrada com o setNewSkill
    // usa o spreed operator ... oldState, para despejar o que já estiver cadastrado juntando com os novos
    setMySkills(oldState => [ ...oldState, data]);
  };


  function handleRemoveSkill(id: string ){ // is será tipo string
    // chamei de oldState, vai recuperar o que tem armazenado atualmente, percorro ele usando filter
    setMySkills(oldState => oldState.filter(
      // percorre cada skill, e para cada skill uso como filtro no skill.id
      //e recupera as skill que o id for diferente do id passado acima
      skill => skill.id !== id
    ))
  };

  useEffect( () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12){
      setGreeting(`Good Morning` );
      
    }
    else if (currentHour >= 12 && currentHour < 18){
      setGreeting('Good Afternoon');
    }
    else {
      setGreeting('Good Night');
    }

  }, [] )


  return(
    <View style={styles.container}>

      <StatusBar barStyle="light-content" backgroundColor='#121015'  />

      <Text style={styles.title}>Hi, Ricardo</Text>

      <Text 
        style={styles.greetings}> 
        
        { greeting } 
        
      </Text>

      <TextInput
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#999'

        //vai pegar o que digitar e passar para o setNewSkill, vai atualizar o estado
        onChangeText={setNewSkill}
      />

      <Button
        title="Add Skill"
        onPress={handleAddNewSkill}
        //passo para esse componente uma propriedade, e coloco a função
        //handleAddNewSkill dentro dela, e dentro do Button.js pego essa propriedade
      />

      <Text style={[styles.title, {marginVertical: 40} ]}>
            My Skills 
      </Text>
      
      <FlatList
        style={{paddingHorizontal: 10}}
        showsHorizontalScrollIndicator={false}
        data={mySkills} //mySkills é onde está minha coleção de dados
        keyExtractor={ item => item.id } //cada item será a própria chave
        renderItem={({ item }) => ( // deestrutura o item ({item}) / e coloca o elemento
            // que irá renderizar, no caso o SkillCard abaixo
            <SkillCard 
              skill={item.name} 
              onPress={ () => handleRemoveSkill(item.id)}
            />
        ) }
      />

    </View>
  )
}

const styles = StyleSheet.create({
    // por padrão o React Native ele já vem como todos os elementos em flex
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20, // lado esquerdo
        paddingVertical: 50, // cima
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    greetings: {
      color: '#FFF',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10, // se for no IOS deixa 15, se android deixa 10
        marginTop: 30,
        borderRadius: 5
    }
})