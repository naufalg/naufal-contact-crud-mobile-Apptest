import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
// import IconLib from '../../assets';
// import {colors, fontFamilies, fontSizes} from '../../utilities/themes';

const TabItem = ({title, active, onPress, onLongPress}) => {
  //   const Icon = () => {
  //     if (title === 'Home') {
  //       return active ? (
  //         <IconLib icon={'home-active'} size={'small'} />
  //       ) : (
  //         <IconLib icon={'home'} size={'small'} />
  //       );
  //     }
  //     if (title === 'Categories') {
  //       return active ? (
  //         <IconLib icon={'cetegory-active'} size={'small'} />
  //       ) : (
  //         <IconLib icon={'cetegory'} size={'small'} />
  //       );
  //     }
  //     if (title === 'Trolley') {
  //       return active ? (
  //         <IconLib icon={'troli-active'} size={'small'} />
  //       ) : (
  //         <IconLib icon={'troli'} size={'small'} />
  //       );
  //     }
  //     if (title === 'Profile') {
  //       return active ? (
  //         <IconLib icon={'profile-active'} size={'small'} />
  //       ) : (
  //         <IconLib icon={'profile'} size={'small'} />
  //       );
  //     }
  //     return <IconLib icon={'home'} size={'small'} />;
  //   };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      {/* <Icon /> */}
      <Text
        style={[
          styles.text,
          {color: active ? colors.primaryBlue : colors.grey},
        ]}>
        {title}
      </Text>
      <View style={active ? styles.line : {}} />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    // fontSize: fontSizes.small,
    // fontFamily: fontFamilies.rubik.w400,
    marginVertical: 4,
    marginBottom: 8,
  },
  line: {
    // borderBottomColor: colors.primaryBlue,
    borderBottomWidth: 1.5,
    width: '40%',
    position: 'absolute',
    bottom: 1.5,
  },
});
