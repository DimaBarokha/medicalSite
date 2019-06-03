import React from 'react'
import {MDBContainer} from 'mdbreact';
import Header from '../Register/stepData/Header'
import {MDBDataTable} from 'mdbreact';

export default class PriceList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            services: []
        };
    }

    renderServices = arr => {
        return {
            columns: [
                {
                    label: '№',
                    field: 'number',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Название Услуги',
                    field: 'title',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Цена',
                    field: 'position',
                    sort: 'asc',
                    width: 270
                },
            ],
            rows: arr.map(item => ({
                number: item.id_service,
                title: item.title,
                office: item.price,
            }))
        };
    }
    getServices = _ => {
        fetch('http://localhost:3001/prices')
            .then(response => response.json())
            .then(response => this.setState({services: response.data}))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getServices();
    }

    render() {
        const {services} = this.state
        return (
            <>
                <Header/>
                <MDBContainer>
                    <MDBDataTable
                        hover
                        data={this.renderServices(services)}
                        paginationLabel={["Назад", "Вперед"]}
                        responsive
                        entriesLabel="Кол-во записей"
                        info={false}
                        searchLabel="Поиск"
                    />
                </MDBContainer>
            </>
        )
    }
}
