import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, Alert, Switch, SafeAreaView } from 'react-native'
const jeta = require("../assets/foto.jpg")
import React, { useState } from 'react';
import { StatusBar } from 'react-native'
// Hola, sorry si el codigo se ve feo, voy empezando jejeje.

const Main = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
    <SafeAreaView>    
        <ScrollView>
            <StatusBar barStyle="light-content" backgroundColor="black" translucent={true}/>
            <View style={[estilasos.introContenedor, { backgroundColor: isEnabled ? '#ede5ed' : '#fffbba' }]}>
                {/*La verda, hacer el switch fue super dificil, de hecho tuve que ver como 10 tutoriales jeje*/}
                <Switch
                    style={estilasos.unSwitch}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text style={estilasos.switchTexto}>Colores</Text>
                <Text style={estilasos.testo}>¡Qué tal!</Text>
                <Text style={estilasos.midddleText}>
                    Bienvenido a mi primera aplicación, en la que me gustaría que me conocieras. 
                    Esto va a ser a través de 5 puntos en los que hablaré un poco de mí. Comencemos:
                </Text>
                <View style={[estilasos.primerView, { backgroundColor: isEnabled ? '#2bb6c8' : '#fffb86' }]}>
                    <Text style={estilasos.numberText}>1.- Cara 😦</Text>
                    <Text style={estilasos.primerTexto}>Aquí pueden ver una foto mia con pelo recojido y la cara de la roca jajaja.</Text>
                    <Image source={jeta} style={estilasos.fotoJeta}/>
                </View>
                <View style={[estilasos.segundoView, { backgroundColor: isEnabled ? '#bc91bc' : '#ffe64d' }]}>
                    <Text style={estilasos.numberText}>2.- Música ♫</Text>
                    <Text style={estilasos.primerTexto2}>Probablemente mi cosa favorita en este mundo es la música. Aquí una lista de mis diez canciones favoritas,
                    el orden es al azar ya que no me puedo decidir por una jeje:</Text>
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
                </View>
            <View style={[estilasos.tercerView, { backgroundColor: isEnabled ? '#d67087' : '#ffb02f' }]}>
                <Text style={estilasos.numberText}>3.- Canción favorita ♪</Text>
                <Text style={estilasos.tercerTexto}>Aunque acabo de decir que no tengo una canción preferida, si que hay una que destaca sobre las otras, esta es: <Text style={estilasos.enef}>Hope de NF</Text> </Text>
                <TouchableOpacity onPress={()=> Linking.openURL('https://youtu.be/tsmPCi7NKrg?si=z5O6Lh9ru9780tg1')} style={estilasos.hope}>
                    <Text style={estilasos.nf}>NF - HOPE</Text>
                </TouchableOpacity>
                <Text style={estilasos.tercerTexto}>El botón de arriba te lleva al video oficial, yo sé que el rap no es para todos, pero esta es especial por su significado.  </Text>
            </View>
            <View style={[estilasos.cuartoView, { backgroundColor: isEnabled ? '#c8902b' : '#ff784b' }]}>
                <Text style={estilasos.numberText}>4.- Datos generales 🗣️</Text>
                <Text style={estilasos.primerTexto}>Mi nombre completo: <Text style={estilasos.enef}>Erick Andres Juarez Ramos</Text></Text>
                <Text style={estilasos.primerTexto}>Mi edad es de:<Text style={estilasos.enef}> 16 años</Text> </Text>
                <Text style={estilasos.primerTexto}>Mi altura es de:<Text style={estilasos.enef}> 181 centimetros</Text></Text>
                <Text style={estilasos.primerTexto}>Mi comida favorita:<Text style={estilasos.enef}> Espagueti a la boloñesa </Text><TouchableOpacity onPress={()=> Alert.alert('El espagueti a la boloñesa es una comida tipica de Italia ☝️🤓')}><Text style={estilasos.cuestion}>?</Text></TouchableOpacity></Text>
                <Text style={estilasos.primerTexto}>Mi pelicula favorita:<Text style={estilasos.enef}> Snoopy: la pelicula </Text><TouchableOpacity onPress={()=> Alert.alert('No me da pena admitirlo, es la mejor pelicula')}><Text style={estilasos.cuestion}>?</Text></TouchableOpacity></Text>
                <Text style={estilasos.primerTexto}>Mi videojuego favorito:<Text style={estilasos.enef}> Titanfall 2 </Text><TouchableOpacity onPress={()=> Alert.alert('Titanfall 2 es un juego que salio en 2016 y es una obra maestra.')}><Text style={estilasos.cuestion}>?</Text></TouchableOpacity></Text>
                <Text style={estilasos.primerTexto}>Budget: $22 (pesos)<Text style={estilasos.enef}> </Text></Text>
            </View>
            <View style={[estilasos.quintoView, { backgroundColor: isEnabled ? '#1d8e5a' : '#e7d667' }]}>
                <Text style={estilasos.numberText}>5.- Programación 🖥️🤓</Text>
                <Text style={estilasos.titulos}>Razones</Text>
                <Text style={estilasos.chiquillos}>Empecé en este mundo hace bastante poco y fue para ayudar a un tío en una tarea. Aunque sinceramennte me enamoré del código y me gusta bastante programar, aunque no sea muy bueno. Me gustaría mencionar que quien me inspiró para continuar fue mi primo Santi, de hecho gracias a él estoy en React native!</Text>
                <Text style={estilasos.titulos}>Hasta ahora</Text>
                <Text style={estilasos.chiquillos}>Al inicio, fue con el lenguaje c++ aunque no le entedí ni un poco. Entonces empecé un curso de html y css, en esos no era tan malo. Luego, justamente mi primo me dijo que aprendiera Javascript, aunque no soy muy bueno en el lenguaje, continué. Y como se ve ahora, estoy con las dos biblitecas de JS, React y React Native. </Text>
                <Text style={estilasos.titulos}>Futuro</Text>
                <Text style={estilasos.chiquillos}>Me gustaría volverme un programador full-stack principalmente de esta biblioteca. Aprender una par de lenguajes más y practicar los que "sé" actualmente. También me gustaría poder trabajar en esto. Muchas gracias por llegar hasta aquí.</Text>
            </View>
            </View>
            <View style={estilasos.final}>
                <Text style={estilasos.finalText}>Muchas gracias por leer. Como lo pueden notar, no es el proyecto más bonito, pero quería probar todos mis conocimientos actuales de React Native, luego de casi un mes. Ya estoy trabajando en la siguiente aplicación, estará lista para el 25 de abril. ¡Gracias!</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
)}

export default Main

// Creo que exaguere bastante con los estilos, perdon
const estilasos = StyleSheet.create({
    introContenedor: {
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        flex: 1,
    },
    unSwitch: {
        paddingLeft: 300,
        position: 'absolute',
        paddingTop: 50,
    },
    switchTexto: {
        position: 'absolute',
        paddingTop: 62,
        paddingLeft: 300,
        fontSize: 10,
        textAlign: 'center'
    },
    testo: {
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
    },
    midddleText: {
        fontSize: 20,
        textAlign: 'center'
    },
    primerView: {
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'black',
    },
    numberText: {
        fontWeight: 'bold',
        padding: 5,
        fontSize: 20,
    },
    primerTexto: {
        padding: 10,
    },
    fotoJeta: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        borderRadius: 3,
        borderColor: 'black',
        borderWidth: .5,
    },
    segundoView: {
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'black',
    },
    primerTexto2: {
        padding: 10,
        textAlign: 'center'
    },
    listMusical: {
        fontSize: 15,
        padding: 5,
    },
    tercerView: {
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'black',
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
        top: 2,
     },
     nf: {
        backgroundColor: 'white',
        borderRadius: 4,
        fontSize: 15,
        padding: 4,  
        lineHeight: 21,
        letterSpacing: 0.25,
        borderColor: 'black',
        borderWidth: .5,
     },
     cuartoView: {
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'black',
     },
     cuestion: {
        fontSize: 10,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 2,
     },
     quintoView: {
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'black',
        maxWidth: '95%'
     },
     final: {
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
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
     },
     chiquillos: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 13,
     }
    })
    // Eso fue todo, espero que no sea un proyecto muy feo jeje.