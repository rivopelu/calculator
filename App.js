/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitung: 0,
    };
  }

  masukanAngka = value => {
    if (this.state.hitung === 0) {
      this.setState({hitung: value});
    } else {
      let hitung = this.setState({hitung: this.state.hitung + '' + value});
    }
  };

  hitungHasil = () => {
    let hasil = eval(this.state.hitung);
    this.setState({hitung: hasil});
  };

  render() {
    // CONTENT

    const mainColor = '#F9A825';
    const colorWhite = '#000';
    const secondaryColor = '#FDD835';

    return (
      <View style={{flex: 1, backgroundColor: mainColor}}>
        <StatusBar backgroundColor={mainColor} barStyle="dark-content" />
        <View style={{flex: 0.6}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          >
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 50,
                  textAlign: 'right',
                  padding: 10,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                {this.state.hitung}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          >
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.setState({hitung: 0})}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'right',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                Clear
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          >
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka('(')}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                (
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(')')}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                )
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka('/')}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.setState({hitung: 0})}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                B--
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          >
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(7)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                7
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(8)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(9)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                9
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka('*')}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                X
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          >
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(4)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(5)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(6)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka('-')}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          >
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(1)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(2)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka(3)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.masukanAngka('+')}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          >
            <TouchableOpacity
              style={{flex: 3}}
              onPress={() => this.masukanAngka(0)}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this.hitungHasil()}
            >
              <Text
                style={{
                  color: colorWhite,
                  fontSize: 25,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: secondaryColor,
                  margin: 3,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                =
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: secondaryColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{color: colorWhite}}>
            Kalkulator untuk nia sayang ❤️
          </Text>
        </View>
      </View>
    );
  }
}

export default App;
