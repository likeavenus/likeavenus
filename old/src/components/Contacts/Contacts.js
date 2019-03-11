import React, {Component} from "react";
import _ from "lodash";
import './Contacts.css';

class Contacts extends Component {
    constructor(props) {
        super(props);

        this.state = {
          contacts: [
              {
                  id: 1,
                  link: 'https://t.me/likeavenus',
                  target: true
              },
              {
                  id: 2,
                  link: 'https://api.whatsapp.com/send?phone=79990421278',
                  target: true
              },
              {
                  id: 3,
                  link: 'tel:89990421278',
                  target: false
              },
              {
                  id: 4,
                  link: 'mailto:gulievrafael94@yandex.ru',
                  target: true
              }
          ]
        };
    }

    render() {
        let contacts = [];
        _.each(this.state.contacts, item => {
            contacts.push(
                <li key={item.id} className="Contacts_item">
                    <a className="Contacts_link" rel="noopener noreferrer" target={item.target ? "_blank" : null} href={item.link}></a>
                </li>
            );
        });
        return(
            <div className="Contacts">
                <h4 className="Contacts_title">Связь со мной</h4>
                <ul className="Contacts_list">
                    {contacts}
                </ul>
            </div>
        );
    }
}

export default Contacts;