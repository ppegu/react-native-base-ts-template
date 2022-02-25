import React from 'react';
import { useState } from 'react';
import {
  FlatListProps,
  LayoutChangeEvent,
  ListRenderItemInfo,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

interface FlatSwiperProps extends Omit<FlatListProps<any>, 'renderItem'> {
  renderComponent: any;
  onIndexChanged?: (index: number[]) => void;
}

const FlatSwiper = (props: FlatSwiperProps) => {
  const { renderComponent: Component, onIndexChanged, ...rest } = props;

  const [state, setState] = useState({
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
  });

  const onLayout = (event: LayoutChangeEvent) => {
    const { height, width } = event.nativeEvent.layout;
    setState({ height, width });
  };

  const viewabilityConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
    waitForInteraction: true,
  });

  const onViewableItemsChanged = React.useRef(
    ({ viewableItems, changed }: any) => {
      if (Array.isArray(viewableItems) && viewableItems.length > 0) {
        if (onIndexChanged) {
          let indexes: number[] = [];
          viewableItems.forEach((item, index) => {
            indexes.push(item.index);
          });

          onIndexChanged(indexes); // TODO: make this as reusable hook so any body can call from there component
        }
      }
    },
  );

  return (
    <View style={{ ...styles.container }} onLayout={onLayout}>
      <FlatList
        renderItem={({
          item,
          index,
          ...restProps
        }: ListRenderItemInfo<any>) => (
          <View style={{ height: state.height, width: state.width }}>
            <Component item={item} index={index} {...restProps} />
          </View>
        )}
        contentOffset={{ y: 0, x: 0 }}
        pagingEnabled={true}
        removeClippedSubviews={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    flex: 1,
  },
});

export default FlatSwiper;
