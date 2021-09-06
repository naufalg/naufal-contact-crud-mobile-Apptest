import React from 'react';
import {View, Text} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function DetailSkeleton() {
  return (
    <View style={{marginTop: 5}}>
      <SkeletonPlaceholder>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={{width: 320, height: 250}} />
          <SkeletonPlaceholder.Item marginTop={10}>
            <SkeletonPlaceholder.Item
              width={150}
              height={20}
              borderRadius={4}
              marginBottom={10}
            />
            <SkeletonPlaceholder.Item
              width={200}
              height={20}
              borderRadius={4}
              marginBottom={10}
            />
            <SkeletonPlaceholder.Item
              width={100}
              height={20}
              borderRadius={4}
              marginBottom={10}
            />
          </SkeletonPlaceholder.Item>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}
