import * as React from 'react';


interface BatmanTableRowProps extends React.Props<BatmanTableRow>{
    data: string[];
    index: number;
}

export class BatmanTableRow extends React.Component<BatmanTableRowProps, void> {
    public render() {
        return (
            <tr key={this.props.index}>
                { this.props.data.map((column, i) =>
                    <td key={i}>{column}</td>
                )}
            </tr>
        );
    }
}
