import * as React from 'react';
import { Table } from 'react-bootstrap'


export class BatmanTable extends React.Component<void, void> {
    public render() {
        return (
            <Table striped bordered condensed hover>
                {this.props.children}
            </Table>
        );
    }
}

            //<table className="batman-table">
            //    {this.props.children}
            //</table>
