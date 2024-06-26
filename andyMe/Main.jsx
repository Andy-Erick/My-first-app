import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Linking,
    Alert,
    Switch
} from 'react-native'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
const jeta = require("../assets/foto.jpg")
import React, { useState } from 'react';
import { StatusBar } from 'react-native'
import { InfoCard } from './InfoCard';
// Hola, sorry si el codigo se ve feo, voy empezando jejeje.

const Main = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { bottom } = useSafeAreaInsets();

    return(
    <SafeAreaView style={{ backgroundColor: isEnabled ? '#ede5ed' : '#fffbba', paddingBottom: -bottom }}>    
        <ScrollView style={{
            padding: 16,
        }}>
            <StatusBar barStyle="dark-content" backgroundColor="black" translucent={true}/>
            {/*La verda, hacer el switch fue super dificil, de hecho tuve que ver como 10 tutoriales jeje*/}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginRight: 12,
                }}>Colores: </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Text style={estilasos.testo}>¡Qué tal!</Text>
            <Text style={estilasos.midddleText}>
                Bienvenido a mi primera aplicación, en la que me gustaría que me conocieras. 
                Esto va a ser a través de 5 puntos en los que hablaré un poco de mí. Comencemos:
            </Text>

            <InfoCard title="1.- Cara 😦" color={isEnabled ? '#2bb6c8' : '#fffb86'}>
                <Text style={estilasos.primerTexto}>Aquí pueden ver una foto mia con pelo recojido y la cara de la roca jajaja.</Text>
                <Image source={jeta} style={estilasos.fotoJeta}/>
            </InfoCard>

            <InfoCard title="2.- Música ♫" color={isEnabled ? '#bc91bc' : '#ffe64d'}>
                <Text style={estilasos.primerTexto2}>Probablemente mi cosa favorita en este mundo es la música. Aquí una lista de mis diez canciones favoritas, el orden es al azar ya que no me puedo decidir por una jeje:</Text>
                <Text style={estilasos.listMusical}>Gary Coleman - The sky is crying</Text>
                <Text style={estilasos.listMusical}>The score - Unstopable</Text>
                <Text style={estilasos.listMusical}>Zayde wolf - Holy water</Text>
                <Text style={estilasos.listMusical}>NF - Clouds</Text>
                <Text style={estilasos.listMusical}>Sam tinnesz - Even if it hurts</Text>
                <Text style={estilasos.listMusical}>Ray Charles - Hit the road Jack</Text>
                <Text style={estilasos.listMusical}>James Brown - It's a mans world</Text>
                <Text style={estilasos.listMusical}>Sleeping wolf - Freaks like us</Text>
                <Text style={estilasos.listMusical}>City wolf - Hands up</Text>
                <Text style={estilasos.listMusical}>NF - Why</Text>
                <Text style={estilasos.listMusical}>Alhan - Un cuerdo en el manicomnio</Text>
            </InfoCard>

            <InfoCard title="3.- Canción favorita ♪" color={isEnabled ? '#d67087' : '#ffb02f'}>
                <Text style={estilasos.tercerTexto}>Aunque acabo de decir que no tengo una canción preferida, si que hay una que destaca sobre las otras, esta es: <Text style={estilasos.enef}>Hope de NF</Text> </Text>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    marginVertical: 8,
                    backgroundColor: '#fffbba',
                    padding: 8,
                    borderRadius: 8,
                    borderColor: 'black',
                    borderWidth: .5,
                }} onPress={() => Linking.openURL('https://youtu.be/tsmPCi7NKrg?si=z5O6Lh9ru9780tg1')}>
                    <Text>NF - HOPE</Text>
                </TouchableOpacity>
                <Text style={estilasos.tercerTexto}>El botón de arriba te lleva al video oficial, yo sé que el rap no es para todos, pero esta es especial por su significado.  </Text>
            </InfoCard>

            <InfoCard title="4.- Datos generales 🗣️" color={isEnabled ? '#c8902b' : '#ff784b'}>
            <Text style={estilasos.primerTexto}>Mi nombre completo: <Text style={estilasos.enef}>Erick Andres Juarez Ramos</Text></Text>
                <Text style={estilasos.primerTexto}>Mi edad es de:<Text style={estilasos.enef}> 16 años</Text> </Text>
                <Text style={estilasos.primerTexto}>Mi altura es de:<Text style={estilasos.enef}> 181 centimetros</Text></Text>
                <Text style={estilasos.primerTexto}>Mi comida favorita:<Text style={estilasos.enef}> Espagueti a la boloñesa </Text><TouchableOpacity onPress={()=> Alert.alert('El espagueti a la boloñesa es una comida tipica de Italia ☝️🤓')}><Text style={estilasos.cuestion}>?</Text></TouchableOpacity></Text>
                <Text style={estilasos.primerTexto}>Mi pelicula favorita:<Text style={estilasos.enef}> Snoopy: la pelicula </Text><TouchableOpacity onPress={()=> Alert.alert('No me da pena admitirlo, es la mejor pelicula')}><Text style={estilasos.cuestion}>?</Text></TouchableOpacity></Text>
                <Text style={estilasos.primerTexto}>Mi videojuego favorito:<Text style={estilasos.enef}> Titanfall 2 </Text><TouchableOpacity onPress={()=> Alert.alert('Titanfall 2 es un juego que salio en 2016 y es una obra maestra.')}><Text style={estilasos.cuestion}>?</Text></TouchableOpacity></Text>
                <Text style={estilasos.primerTexto}>Budget: $22 (pesos)<Text style={estilasos.enef}> </Text></Text>
            </InfoCard>

            <InfoCard title="5.- Programación 🖥️🤓" color={isEnabled ? '#1d8e5a' : '#e7d667'}>
                <Text style={estilasos.titulos}>Razones</Text>
                <Text style={estilasos.chiquillos}>Empecé en este mundo hace bastante poco y fue para ayudar a un tío en una tarea. Aunque sinceramennte me enamoré del código y me gusta bastante programar, aunque no sea muy bueno. Me gustaría mencionar que quien me inspiró para continuar fue mi primo Santi, de hecho gracias a él estoy en React native!</Text>
                <Text style={estilasos.titulos}>Hasta ahora</Text>
                <Text style={estilasos.chiquillos}>Al inicio, fue con el lenguaje c++ aunque no le entedí ni un poco. Entonces empecé un curso de html y css, en esos no era tan malo. Luego, justamente mi primo me dijo que aprendiera Javascript, aunque no soy muy bueno en el lenguaje, continué. Y como se ve ahora, estoy con las dos biblitecas de JS, React y React Native. </Text>
                <Text style={estilasos.titulos}>Futuro</Text>
                <Text style={estilasos.chiquillos}>Me gustaría volverme un programador full-stack principalmente de esta biblioteca. Aprender una par de lenguajes más y practicar los que "sé" actualmente. También me gustaría poder trabajar en esto. Muchas gracias por llegar hasta aquí.</Text>
            </InfoCard>

            <View style={[estilasos.final, {
                marginBottom: bottom,
            }]}>
                <Text style={estilasos.finalText}>Muchas gracias por leer. Como lo pueden notar, no es el proyecto más bonito, pero quería probar todos mis conocimientos actuales de React Native, luego de casi un mes. Ya estoy trabajando en la siguiente aplicación, estará lista para el 25 de abril. ¡Gracias!</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
)}

export default () => {
    return(
        <SafeAreaProvider>
            <Main/>
        </SafeAreaProvider>
    )
};

// Creo que exaguere bastante con los estilos, perdon
const estilasos = StyleSheet.create({
    testo: {
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
        marginBottom: 12,
    },
    midddleText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 16,
    },
    primerTexto: {
        marginBottom: 12,
    },
    fotoJeta: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        borderRadius: 3,
        borderColor: 'black',
        borderWidth: .5,
    },
    listMusical: {
        fontSize: 15,
        padding: 5,
    },
    tercerTexto: {
        textAlign: 'center',
        padding: 2,
     },
     enef: {
        fontWeight: 'bold'
     },
     hope: {
        alignItems: 'center',
     },
     nf: {
        backgroundColor: 'white',
        borderRadius: 8,
        fontSize: 15,
        padding: 4,  
        lineHeight: 21,
        letterSpacing: 0.25,
        borderColor: 'black',
        borderWidth: .5,
     },
     cuestion: {
        fontSize: 10,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 2,
     },
     final: {
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 8,
        padding: 12,
     },
     finalText:{
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
     },
     titulos: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 8
     },
     chiquillos: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 13,
     },
})
// Eso fue todo, espero que no sea un proyecto muy feo jeje.