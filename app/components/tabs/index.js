import React from "react";
import { TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import IconE from "react-native-vector-icons/Entypo";

import { Container, TabsContainer, TabItem, TabText } from "./styles";

export default function Tabs({navigation}) {
    goTo = url => {
        
    };

    return (
        <Container style={{marginTop: 20}}>
            <TabsContainer>
                <TouchableOpacity onPress={() => {                    
                    navigation.navigate("ProjectScreen")}
                    }>
                    <TabItem>
                        <IconE
                            style={{ padding: 10 }}
                            name="network"
                            size={50}
                            color={"#fff"}
                        />
                        <TabText>Status Projetos</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {                        
                        navigation.navigate("ResourceScreen")}
                    }
                >
                    <TabItem>
                        <Icon
                            style={{ padding: 10 }}
                            name="people-outline"
                            size={50}
                            color={"#fff"}
                        />
                        <TabText>Recursos Projetos</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {                    
                    navigation.replace("LoginScreen")}
                    }>
                    <TabItem>
                        <Icon
                            style={{ padding: 10 }}
                            name="exit-to-app"
                            size={50}
                            color={"#fff"}
                        />
                        <TabText>Sair</TabText>
                    </TabItem>
                </TouchableOpacity>
            </TabsContainer>
        </Container>
    );
}
