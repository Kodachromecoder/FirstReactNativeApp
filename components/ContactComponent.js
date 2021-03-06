import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView >
               <Card wrapperStyle={{margin: 20}} title="Contact Information">
                    <Text > 1 Nucamp way</Text>
                    <Text > Seattle, WA 98001</Text>
                    <Text style={{marginBottom: 10}}> U.S.A.</Text>
                    <Text > Phone: 1-206-555-1234</Text>
                    <Text > Email: campsites@nucamp.co</Text>
                </Card>  
            </ScrollView>
        );
    }
}

export default Contact;