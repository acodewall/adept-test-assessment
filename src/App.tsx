import React from "react";
import "./styles.css";

interface IRowProps {
  data: IDataRecord; // TODO
  index: number;
  onUpdate: (index: number) => void;
}

class Row extends React.PureComponent<IRowProps> {
  renderCount = 0;

  handleUpdate = () => {
    this.props.onUpdate(this.props.index);
  };

  render() {
    const {
      data: { label, value }
    } = this.props;

    this.renderCount++;

    return (
      <div>
        <span className="label">{label}:</span>
        <span>{value}</span> <span>({this.renderCount})</span>{" "}
        <button className="button" onClick={this.handleUpdate}>
          Update
        </button>
      </div>
    );
  }
}

interface IDataRecord {
  label: string; // uniq
  value: number;
}

interface IAppProps {
  size?: number;
}

export default class App extends React.Component<
  IAppProps,
  { list: IDataRecord[] }
> {
  state = {
    list: Array.from({ length: this.props.size ?? 200 }, (_el, index) => ({
      label: `label ${index + 1}`,
      value: App.generateValue()
    }))
  };

  static generateValue() {
    return Math.round(100 + Math.random() * 900);
  }

  handleUpdate = (index: number) => {
    this.setState(({ list }) => {
      const newList = list.map((item, i) => {
        return i === index ? { ...item, value: App.generateValue() } : item;
      });

      return { list: newList };
    });
  };

  render() {
    return (
      <div>
        <h1>Test app</h1>
        {this.state.list.map((el, index) => (
          <Row data={el} index={index} onUpdate={this.handleUpdate} />
        ))}
      </div>
    );
  }
}
