import * as React from 'react';


interface BatmanTableRowDiffProps extends React.Props<BatmanTableRowDiff>{
    data: string[];
    index: number;
}

export class BatmanTableRowDiff extends React.Component<BatmanTableRowDiffProps, void> {
    public render() {
        return (
            <tr key={this.props.index}>
                { this.props.data.map((column, i) =>
                    {
                        let foo = 'help'
                        if (i >= 7 && i <= 8){
                            foo = "highlighttest"
                        }
                        return(
                        <td key={i} className={foo}>{column}</td>
                            );
                    }
                )}
            </tr>
        );
    }
}
