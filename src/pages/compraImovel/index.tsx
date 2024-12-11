import React from "react";
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { style } from './styles';

import { ITEMS, ITEMS_LINE_CONFIG } from "./constants";
import { AMENITIES, AMENITIES_LINE_CONFIG } from "./constants";
import { permissoes, taxasMultas } from "./constants";

import seta from '../../../assets/seta.png';
import home from '../../../assets/home.png';
import camera from '../../../assets/camera.png';
import eatIcon from '../../../assets/eatIcon.png';
import sleepIcon from '../../../assets/sleepIcon.png';
import washIcon from '../../../assets/washIcon.png';
import homeIcon from '../../../assets/homeIcon.png';
import bathroomIcon from '../../../assets/bathroomIcon.png';
import owner from '../../../assets/owner.png';

const splitItems = (items: string[], config: number[]): string[][] => {
  const result: string[][] = [];
  let index = 0;
  config.forEach((count) => {
    result.push(items.slice(index, index + count));
    index += count;
  });
  return result;
};

export default function CompraImovel() {
  const itemsRows = splitItems(ITEMS, ITEMS_LINE_CONFIG);
  const amenitiesRows = splitItems(AMENITIES, AMENITIES_LINE_CONFIG);
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.header}>
          <Image source={seta} style={style.arrowIcon} />
          <Text style={style.headerText}>Visualize e confirme o cadastro do{'\n'}seu imóvel </Text>
        </View>
        <View style={style.propertyCard}>
          <Image source={home} style={style.propertyImage} />
          <View style={style.pagination}>
            <View style={style.paginationDotActive} />
            <View style={style.paginationDot} />
            <View style={style.paginationDot} />
          </View>
        </View>
        <View style={style.propertyDetails}>
          <Text style={style.propertyTitle}>Poundsflats Unidade Aquário 065</Text>
          <View style={style.propertyInfo}>
            <Text style={style.locationText}>Santos, SP</Text>
            <Text style={style.priceText}>Diária: R$97</Text>
          </View>
          <Text style={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.
          </Text>
        </View>
        <View style={style.videoButton}>
          <Image source={camera} style={style.cameraIcon} />
          <Text style={style.videoButtonText}>Vídeo Visita</Text>
        </View>
        <View style={style.featuresGrid}>
          <View style={style.featureItem}>
            <Image source={sleepIcon} style={style.featureIcon} />
            <Text style={style.featureText}>Quarto{'\n'}Mobiliado</Text>
          </View>
          <View style={style.featureItem}>
            <Image source={bathroomIcon} style={style.featureIcon} />
            <Text style={style.featureText}>Banheiro{'\n'}equipado</Text>
          </View>
          <View style={style.featureItem}>
            <Image source={eatIcon} style={style.featureIcon} />
            <Text style={style.featureText}>Cozinha{'\n'}equipada</Text>
          </View>
          <View style={style.featureItem}>
            <Image source={homeIcon} style={style.featureIcon} />
            <Text style={style.featureText}>Sala{'\n'}equipada</Text>
          </View>
          <View style={style.featureItem}>
            <Image source={washIcon} style={style.featureIcon} />
            <Text style={style.featureText}>Área de{'\n'}serviço</Text>
          </View>
        </View>
        <View style={style.ownerInfo}>
          <Text style={style.ownerText}>Locado por Henrique Rodrigues</Text>
          <Image source={owner} style={style.ownerAvatar} />
        </View>
        <View style={style.InputSection}>
          <View style={style.box}>
            <Text style={style.label}>Tipo de Imóvel</Text>
            <Text style={style.value}>Casa/Apartamento</Text>
          </View>
          <View style={style.box}>
            <Text style={style.label}>Quartos</Text>
            <Text style={style.value}>3 Quartos</Text>
          </View>
          <View style={style.box}>
            <Text style={style.label}>Banheiros</Text>
            <Text style={style.value}>2 Banheiros</Text>
          </View>
        </View>
        <View style={style.tagSection}>
          <Text style={style.sectionTitle}>Itens do Imóvel</Text>
          {itemsRows.map((row, rowIndex) => (
            <View style={style.itemsContainer} key={`item-row-${rowIndex}`}>
              {row.map((item, index) => (
                <View style={style.item} key={`item-${rowIndex}-${index}`}>
                  <Text style={style.itemText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={style.tagSection}>
          <Text style={style.sectionTitle}>Comodidades</Text>
          {amenitiesRows.map((row, rowIndex) => (
            <View style={style.itemsContainer} key={`amenity-row-${rowIndex}`}>
              {row.map((item, index) => (
                <View style={style.item} key={`amenity-${rowIndex}-${index}`}>
                  <Text style={style.itemText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={style.tagSection}>
          <Text style={style.sectionTitle}>Permissões</Text>
          {permissoes.map((item, index) => (
            <View style={style.permissionItem} key={`permission-${index}`}>
              <Image
                source={item.permitido ? require('../../../assets/check.png') : require('../../../assets/not-check.png')}
                style={style.permissionIcon}
              />
              <Text style={item.permitido ? style.permissionTextAllowed : style.permissionTextDenied}>
                {item.texto}
              </Text>
            </View>
          ))}
        </View>
        <View style={style.tagSection}>
          <Text style={style.sectionTitle}>Taxas/Multas</Text>
          {taxasMultas.map((item, index) => (
            <View style={style.feeItem} key={`fee-${index}`}>
              <Image source={item.icone} style={style.feeIcon} />
              <View>
                <Text style={style.feeText}>{item.texto}</Text>
                <Text style={style.feeValue}>{item.valor}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={style.videoButton}>
          <Text style={style.videoButtonText}>Finalizar cadastro do imóvel</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
