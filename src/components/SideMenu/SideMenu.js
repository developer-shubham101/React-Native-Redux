/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';




class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    closeDrawer = ( ) => () => {
         
        this.props.navigation.closeDrawer()
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView bounces={false}>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>Section 1</Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ChooseColor')}>Choose Color</Text>
                        </View>
                    </View>
                    <View> 
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('APICallPage')}>API </Text>
                        </View>
                    </View>
                    <View> 
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.closeDrawer() }>Close Drawer </Text>
                        </View>
                    </View>
                     
                    
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text>This is my fixed footer</Text>

                    <Text style={styles.sectionHeadingStyle}>If you need get any Api response in side menu </Text>
                    <Text style={styles.sectionHeadingStyle}>Api status {this.props.notification.status} </Text>
                </View>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};
const mapStateToProps = state => {
    return { notification: state.api };
};

export default connect(mapStateToProps, {

})(SideMenu);