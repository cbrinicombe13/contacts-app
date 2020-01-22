import axios from "axios";

export default class Connection {
    constructor() {
        this.root = 'http://192.168.64.2/contacts-app-api';
    }

    readTables = async () => {
        return await axios.get(this.root + '/meta/read_tables.php');
    }

    createTable = async (tID) => {
        return await axios.get(this.root + '/book/init.php', {
            params: {
                tID: tID
            }
        });
    }

    read = async (bookID) => {
        return await axios.get(this.root + '/contact/read.php', {
            params: {
                bookID: bookID
            }
        });
    }

    readSingle = async (id) => {
        return await axios.get(this.root + '/contact/read_single.php', {
            params: {
                id: id
            }
        });
    }

    create = async (contact) => {
        return await axios.post(this.root + '/contact/create.php', JSON.stringify(contact));
    }

    delete = async (id) => {
        return await axios.delete(this.root + '/contact/delete.php', {
            params: {
                id: id
            }
        });
    }

    update = async (contact) => {
        return await axios.put(this.root + '/contact/update.php', JSON.stringify(contact));
    }

    clear = async () => {
        return await axios.delete(this.root + '/contact/clear.php');
    }

}