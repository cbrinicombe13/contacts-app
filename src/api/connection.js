import axios from "axios";

export default class Connection {
    constructor() {
        this.root = 'http://192.168.64.2/contacts-app-api/contact';
    }

    read = async () => {
        return await axios.get(this.root + '/read.php');
    }

    readSingle = async (id) => {
        return await axios.get(this.root + '/read_single.php', {
            params: {
                id: id
            }
        });
    }

    create = async (contact) => {
        return await axios.post(this.root + '/create.php', JSON.stringify(contact));
    }

    delete = async (id) => {
        return await axios.delete(this.root + '/delete.php', {
            params: {
                id: id
            }
        });
    }

    update = async (contact) => {
        return await axios.put(this.root + '/update.php', JSON.stringify(contact));
    }

    clear = async () => {
        return await axios.delete(this.root + '/clear.php');
    }

}