/**
 * Author: Jack Lam - jacklam718@gmail.com
 * GitHub: https://github.com/jacklam718
 * License: MIT
 */


/**卡片阴影效果*/

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

class Card extends Component {
  render() {
    const newStyles = this.props.styles || {};
    return (
      <View style={[styles.container, styles.card, newStyles.card]}>
        {this.props.children}
      </View>
    );
  }
}

class CardImage extends Component {
  render () {
    const newStyles = this.props.styles || {};
    return (
      <View style={[styles.cardImage, newStyles.cardImage]}>
        {this.props.children}
      </View>
    );
  }
}

class CardTitle extends Component {
  render () {
    const newStyles = this.props.styles || {};
    return (
      <View style={[styles.cardTitle, newStyles.cardTitle]}>
        {this.props.children}
      </View>
    );
  }
}

class CardContent extends Component {
  render () {
    const newStyles = this.props.styles || {};
    return (
      <View style={[styles.cardContent, newStyles.cardContent]}>
        {this.props.children}
      </View>
    );
  }
}

class CardAction extends Component {
  render () {
    const newStyles = this.props.styles || {};
    return (
      <View>
        {this.props.separator ? <Separator /> : null}
        <View style={[styles.cardAction, newStyles.cardAction]}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

class Separator extends Component {
  render () {
    return <View style={styles.separator} />
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0.3,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
    backgroundColor: "#fff",
    borderRadius: 2,

  },
  cardImage: {
    flex: 1
  },
  cardTitle: {
    flexDirection: 'row',
    padding: 16
  },
  cardContent: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  cardAction: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',

  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E9E9E9'
  }
});

export {
  Card,
  CardTitle,
  CardAction,
  CardContent,
  CardImage,
  Separator
}
