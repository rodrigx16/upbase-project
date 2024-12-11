import { StyleSheet } from "react-native";

const backgroundColor = '#7B2CBF';
const fontSize = 14;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  arrowIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 46,
    lineHeight: 24,
    color: '#4A4A4A',
  },
  propertyCard: {
    alignItems: 'center',
    marginVertical: 16,
  },
  propertyImage: {
    width: '90%',
    height: 200,
    borderRadius: 12,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -19,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6B21A8',
    marginHorizontal: 4,
  },
  propertyDetails: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center'
  },
  propertyInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: fontSize,
    color: '#4A4A4A',
  },
  priceText: {
    fontSize: fontSize,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    color: '#C4C4C4',
    textAlign: 'justify',
    marginTop: 11,
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'center',
    width: '90%',
    marginTop: 15,
  },
  cameraIcon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  videoButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  featureItem: {
    width: '30%',
    alignItems: 'flex-start',
    marginBottom: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    marginHorizontal: '1.5%', 
  },
  featureIcon: {
    width: 30,
    height: 30,
    marginBottom: 8,
    marginLeft: 10,
    resizeMode: 'contain'
  },
  featureText: {
    fontSize: fontSize,
    color: '#C4C4C4',
    textAlign: 'left',
    lineHeight: 18,
    marginLeft: 10,
  },
  ownerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    width: '90%',
    alignSelf: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: -8,
  },    
  ownerText: {
    fontSize: fontSize,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  ownerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  InputSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "90%",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
  },
  label: {
    fontSize: 11,
    color: "#A0A0A0",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "gray",
  },
  tagSection: {
    flex: 1,
    marginBottom: -15,
    padding: 16,
    backgroundColor: "#fff"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3A3A3A",
    marginBottom: 10,
    paddingLeft: 8,
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginHorizontal: -4,
    paddingLeft: 7,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    margin: 4,
  },
  itemText: {
    fontSize: 12,
    color: "#3A3A3A",
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginLeft: 8,
  },
  permissionIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain'
  },
  permissionTextAllowed: {
    fontSize: fontSize,
  },
  permissionTextDenied: {
    fontSize: fontSize,
  },
  feeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  feeIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    resizeMode: 'contain',
    marginLeft: 12,
  },
  feeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',     
  },
  feeValue: {
    fontSize: 12,
    color: '#888',
  },
});
