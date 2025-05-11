import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// @ts-ignore
import eventImg from '../assets/tech_events_img.jpg';

const eventsCard = ({data}: any) => {
  return (
    <>
      <View style={styles.card}>
        <Image style={styles.cardWrapper} source={eventImg} />
        <Text style={styles.cardType}>{data.type}</Text>
        <Text style={styles.cardTitle}>{data.title}</Text>
        <View style={styles.cardPrice}>
          <Text style={styles.cardPriceDicount}>
            {data.discountPrice} {data.currencySymbol}
          </Text>
          <Text style={styles.cardPriceRegular}>
            {data.regularPrice} {data.currencySymbol}
          </Text>
        </View>
        <View style={styles.cardDetails}>
          <View>
            <Image />
            <Text>{data.participants} Participants</Text>
          </View>

          <Image />
          <View>
            <Text>{data.date}</Text>
          </View>

          <TouchableOpacity style={styles.cardBtn}>
            <Text style={styles.cardBtnTxt}>Join Event</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    paddingBottom: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.4,
    // shadowRadius: 15,
    // elevation: 5,
  },
  cardWrapper: {
    width: '100%',
    height: 136,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  cardType: {
    position: 'absolute',
    top: 14,
    left: 0,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#1668E3',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 12,
    color: '#fff',
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 500,
    color: '#000',
    marginBottom: 10,
    marginLeft: 10,
  },
  cardPrice: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  cardPriceDicount: {
    fontSize: 12,
    color: '#FF3A46',
    fontWeight: 600,
    marginLeft: 10,
    marginRight: 8,
  },
  cardPriceRegular: {
    fontSize: 10,
    color: '#A3A3A3',
    fontWeight: 500,
    textDecorationLine: 'line-through',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'flex-end',
  },
  cardBtn: {
    backgroundColor: '#1668E3',
    borderRadius: 20,
  },
  cardBtnTxt: {
    fontSize: 10,
    color: '#EAF2FF',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});

export default eventsCard;
