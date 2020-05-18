import React, { Component, createContext } from "react";
import app from "../FireBase";

export const ApartmentDataContext = createContext();

export default class ApartmentDataProvider extends Component {
  state = {
    user: false,
    userEmail: "",
    uistate: "landing",
    ApartmentDetails: {},
    Expenses: [],
    FlatData: [],
    paidFlats: [],
  };

  componentDidMount() {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: true, userEmail: user.email, uistate: "home" });
        this.InitialData(user.email);
      } else {
        this.setState({ user: false });
      }
    });
  }

  InitialData = (email) => {
    app
      .firestore()
      .collection(`${email}Details`)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.setState({ ApartmentDetails: doc.data() });
        });
      });
    app
      .firestore()
      .collection(`${email}expenses`)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let expense = {
            ...doc.data(),
            id: doc.id,
          };
          this.setState({ Expenses: [...this.state.Expenses, expense] });
        });
      });
    app
      .firestore()
      .collection(`${email}FlatData`)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.setState({ FlatData: doc.data().Data });
        });
      })
      .then((e) => {
        let paidflats = [];
        this.state.FlatData.forEach((flat) => {
          flat.maintenance
            ? paidflats.push(parseInt(flat.name))
            : console.log();
        });
        this.setState({ paidFlats: paidflats });
      });
  };
  adddata = () => {
    let id;
    let floors = 22;
    let flats = 9;
    let array = [];
    for (let floor = 1; floor <= floors; floor++) {
      for (let flat = 1; flat <= flats; flat++) {
        let flatNumber = floor * 100 + flat;
        let newFlat = {
          name: `${flatNumber}`,
          maintenance: false,
        };
        array.push(newFlat);
      }
    }
    app
      .firestore()
      .collection(`${this.state.userEmail}FlatData`)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          id = doc.id;
        });
      })
      .then((e) => {
        app
          .firestore()
          .collection(`${this.state.userEmail}FlatData`)
          .doc(id)
          .update({ Data: array });
      });
  };
  updateMaintenance = (updateflats) => {
    let array = this.state.FlatData;
    array.find((flat) => {
      updateflats.includes(parseInt(flat.name))
        ? (flat.maintenance = true)
        : console.log("no");
      return null;
    });

    app
      .firestore()
      .collection(`${this.state.userEmail}FlatData`)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          app
            .firestore()
            .collection(`${this.state.userEmail}FlatData`)
            .doc(doc.id)
            .update({
              Data: array,
            });
        });
      });
    this.setState({
      FlatData: array,
      paidFlats: [...this.state.paidFlats, ...updateflats],
    });
  };

  updateDetails = (nameOfApartment, corpusFund, monthlyMaintenance) => {
    console.log(nameOfApartment, corpusFund, monthlyMaintenance);

    app
      .firestore()
      .collection(`${this.state.userEmail}Details`)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let id = doc.id;

          app
            .firestore()
            .collection(`${this.state.userEmail}Details`)
            .doc(id)
            .update({
              nameOfApartment,
              corpusFund,
              monthlyMaintenance,
            });
        });
      })
      .then((e) => {
        this.setState({
          ApartmentDetails: { nameOfApartment, corpusFund, monthlyMaintenance },
        });
      });
  };
  UpdateExpenses = (expense, amount) => {
    console.log(expense, amount);

    app
      .firestore()
      .collection(`${this.state.userEmail}expenses`)
      .add({
        expense,
        amount,
      })
      .then((ref) => {
        let newData = {
          expense,
          amount,
          id: ref.id,
        };
        this.setState({
          Expenses: [...this.state.Expenses, newData],
        });
      });
  };

  UpdateData = (
    email,
    password,
    ApartmentName,
    Floors,
    Flats,
    corpusFund,
    monthlyMaintenance
  ) => {
    app
      .firestore()
      .collection(`${email}Details`)
      .add({
        floors: Floors,
        flats: Flats,
        nameOfApartment: ApartmentName,
        corpusFund,
        monthlyMaintenance,
      })
      .then(() => {
        this.setState({
          ApartmentDetails: {
            floors: Floors,
            flats: Flats,
            nameOfApartment: ApartmentName,
            corpusFund,
            monthlyMaintenance,
          },
        });
      })
      .then((e) => {
        app.firestore().collection("apartments").add({
          email,
          nameOfApartment: ApartmentName,
        });
      })
      .catch((e) => console.log(e));

    let floors = Floors;
    let flats = Flats;
    let array = [];
    for (let floor = 1; floor <= floors; floor++) {
      for (let flat = 1; flat <= flats; flat++) {
        let flatNumber = floor * 100 + flat;
        let newFlat = {
          name: `${flatNumber}`,
          maintenance: false,
        };
        array.push(newFlat);
      }
    }
    app
      .firestore()
      .collection(`${email}FlatData`)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          app
            .firestore()
            .collection(`${email}FlatData`)
            .doc(doc.id)
            .update({ Data: array });
        });
      })
      .then((e) => {
        app.auth().createUserWithEmailAndPassword(email, password);
        this.setState({ FlatData: array, uistate: "login" });
      });
  };

  updateUI = (name) => {
    this.setState({ uistate: name });
  };
  render() {
    return (
      <ApartmentDataContext.Provider
        value={{
          ...this.state,
          uistate: this.state.uistate,
          ApartmentDetails: this.state.ApartmentDetails,
          Expenses: this.state.Expenses,
          FlatData: this.state.FlatData,
          PaidFlats: this.state.paidFlats,
          updateMaintenance: this.updateMaintenance,
          userEmail: this.state.userEmail,
          updateDetails: this.updateDetails,
          UpdateExpenses: this.UpdateExpenses,
          UpdateData: this.UpdateData,
          updateUI: this.updateUI,
          user: this.state.user,
        }}
      >
        {this.props.children}
      </ApartmentDataContext.Provider>
    );
  }
}
