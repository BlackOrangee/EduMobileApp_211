import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';

const HomeNewsCard = ({data} : any) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity>
                <Image
                    style={styles.cardImage}
                    source={data.image}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardInfo}>
                <Text style={styles.cardTextSecondary}>
                    {formatDistance(new Date(data.date), new Date(), {
                        addSuffix: true,
                        locale: enUS,
                    })}
                </Text>
                <Text style={styles.cardTitle}>
                    {data.title}
                </Text>
                <View style={styles.cardStats}>
                    <View style={styles.cardStatsItem}>
                        <Image
                            style={styles.cardStatsItemIcon}
                            source={require('../assets/homeNewsCardLikeIcon.png')}
                        />
                        <Text style={styles.cardTextSecondary}>
                            {data.likes}
                        </Text>
                    </View>
                    <View style={styles.cardStatsItem}>
                        <Image
                            style={styles.cardStatsItemIcon}
                            source={require('../assets/homeNewsCardCommentsIcon.png')}
                        />
                        <Text style={styles.cardTextSecondary}>
                            {data.comments}
                        </Text>
                    </View>
                    <View style={styles.cardStatsItem}>
                        <Image
                            style={styles.cardStatsItemIcon}
                            source={require('../assets/homeNewsCardShareIcon.png')}
                        />
                        <Text style={styles.cardTextSecondary}>
                            {data.shared}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardMenuBtn}>
                <Image
                    source={require('../assets/homeNewsCadOptionIcon.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardMenuBtn: {
        position: 'absolute',
        top: 15,
        right: 15,
        shadowColor: 'rgba(0,0,0,0.16)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 10,
    },
    cardImage: {
        width: 105,
        height: 91,
        borderRadius: 10,
    },
    cardInfo: {
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    cardTitle: {
        width: '70%',
    },
    cardStats: {
        flexDirection: 'row',
        gap: 20,
    },
    cardStatsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    cardStatsItemIcon: {
        width: 14,
        height: 14,
    },
    cardTextSecondary: {
        fontFamily: 'Inter',
        fontSize: 10,
        fontWeight: '500',
        color: '#A3A3A3',
    },
});
export default HomeNewsCard;
