import React from "react";

import {Text,View,Image,SafeAreaView} from 'react-native';

import { style } from './styles';

import icon from '../../../assets/icon.png'
import sad from '../../../assets/face.png'
import building from '../../../assets/building.png'
import calendar from '../../../assets/calendar.png'
import chart from '../../../assets/chart.png'
import seta from '../../../assets/seta.png'

export default function HomePage() {
    return (
        <SafeAreaView style={style.safeArea}>   
        <View style={style.container}>
                <View style={style.header}>
                <Image source={seta} style={style.icon} />
                <Text style={style.registerText}>+ Cadastrar Imóvel</Text>
                </View>
                <Text style={style.welcomeText}>Bem-vindo, Raphael!</Text>
                <View style={style.buttonContainer}>
                  <View style={style.buttonSelected}>
                    <Text style={style.buttonTextSelected}>Todos os flats</Text>
                    </View>
                <View style={style.buttonUnselected}>
                 <Text style={style.buttonTextUnselected}>Indisponíveis</Text>
                 </View>
                </View>
                <View style={style.messageContainer}>
                  {<Image source={sad} style={style.sadFace} />}
                  <Text style={style.messageText}>
                   Você não tem nenhum imóvel{'\n'} cadastrado. Que tal cadastrar{'\n'} agora?
                  </Text>
                  <View style={style.registerButton}>
                   <Text style={style.registerButtonText}>
                    Cadastrar meu primeiro imóvel
                   </Text>
                  </View>
                  </View>
                </View>
                <View style={style.footer}>
                <Image source={building} style={style.footerIcon} />
                <Image source={calendar} style={style.footerIcon} />
                <Image source={chart} style={style.footerIcon} />
                <Image source={icon} style={style.footerIcon} />
                </View>
        </SafeAreaView>
    );
}