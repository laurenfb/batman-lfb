import * as React from 'react';


interface BatmanSectionHeaderProps extends React.Props<BatmanSectionHeader>{
    title: string;
}

export class BatmanSectionHeader extends React.Component<BatmanSectionHeaderProps, void> {
    public render() {
        return (
            <h3 className="batman-section-header">{this.props.title}:</h3>
        );
    }
}
