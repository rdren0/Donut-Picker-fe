import React, { Component } from "react";
import "./App.css";

export class Donut extends Component {
  constructor() {
    super();
    this.state = {
      strokeWidth: 5,
      fill: ""
    };
  }

  componentDidMount = () => {
    let fill = this.props.fill;
    this.setState({ fill });
  };

  render() {
    return (
      <div className="donut">
        <svg
          id="Capa_1"
          enableBackground="new 0 0 512.094 512.094"
          viewBox="0 0 512.094 512.094"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            id="XMLID_966_"
            cx="256.003"
            cy="256.094"
            fill={this.state.fill}
            r="246"
          />
          <path
            id="XMLID_967_"
            d="m47.99 384.085c16.551-7.948 37.002-5.062 50.721 8.657 17.374 17.374 45.543 17.374 62.917 0 17.374-17.374 45.543-17.374 62.917 0 17.374 17.374 45.543 17.374 62.917 0 17.374-17.374 45.543-17.374 62.917 0 17.374 17.374 45.543 17.374 62.917 0 14.182-14.182 35.557-16.788 52.382-7.816l-.048-.03c-43.298 70.318-120.987 117.198-209.626 117.198-88.558 0-166.187-46.795-209.508-117.007z"
            fill="#ffcb7c"
          />
          <circle
            onClick={() =>
              this.props.saveFavorites(this.state.fill, this.props.index)
            }
            id="XMLID_959_"
            cx="256.003"
            cy="256.094"
            fill="#d6ccc5"
            r="88"
          />
          <path
            id="XMLID_1146_"
            d="m333.325 431.892c-24.406 10.751-50.421 16.202-77.322 16.202-20.999 0-41.637-3.366-61.34-10.004-5.235-1.764-10.907 1.05-12.669 6.284-1.763 5.234 1.05 10.906 6.284 12.669 21.765 7.333 44.551 11.051 67.726 11.051 29.694 0 58.422-6.022 85.384-17.899 5.054-2.227 7.347-8.128 5.12-13.183-2.228-5.054-8.13-7.348-13.183-5.12z"
            />
          <path
            id="XMLID_1179_"
            d="m256.003 354.094c54.038 0 98-43.962 98-98s-43.962-98-98-98-98 43.962-98 98 43.962 98 98 98zm0-176c43.009 0 78 34.991 78 78s-34.991 78-78 78-78-34.991-78-78 34.991-78 78-78z"
           />
          <path
            id="XMLID_1183_"
            d="m200.465 50.023-14 14c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l14-14c3.905-3.905 3.905-10.237 0-14.143-3.905-3.905-10.237-3.905-14.142 0z"
            fill="#ac6dff"/>
          <path
            id="XMLID_1207_"
            d="m319.003 81.089c2.559 0 5.119-.977 7.071-2.929 3.905-3.905 3.905-10.237 0-14.142l-13.99-13.989c-3.905-3.905-10.237-3.905-14.142 0s-3.905 10.237 0 14.142l13.99 13.989c1.953 1.953 4.512 2.929 7.071 2.929z"
          fill="#ffaacb"/>
          <path
            id="XMLID_1209_"
            d="m144.986 183.62-14 14c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l14-14c3.905-3.905 3.905-10.237 0-14.143-3.904-3.905-10.236-3.905-14.142 0z"
            fill="#3728bf"
/>
          <path
            id="XMLID_1210_"
            d="m82.076 197.615-13.989-13.989c-3.905-3.905-10.237-3.905-14.143 0s-3.905 10.237 0 14.143l13.989 13.989c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929c3.906-3.906 3.906-10.238.001-14.143z"
            fill="#5ab735"/>
          <path
            id="XMLID_1228_"
            d="m381.02 197.62-14-14c-3.905-3.905-10.237-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143l14 14c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929c3.905-3.905 3.905-10.237.001-14.143z"
            fill="#ce2c16"/>
          <path
            id="XMLID_1229_"
            d="m458.062 183.626c-3.905-3.905-10.237-3.905-14.143 0l-13.989 13.989c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l13.989-13.989c3.906-3.906 3.906-10.238.001-14.143z"
            fill="#5ab735"/>
          <path
            id="XMLID_1230_"
            d="m138.058 348.289c2.559 0 5.119-.976 7.071-2.929l14-14c3.905-3.905 3.905-10.237 0-14.143-3.905-3.905-10.237-3.905-14.143 0l-14 14c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.513 2.929 7.072 2.929z"
            fill="#3728bf"
/>
          <path
            id="XMLID_1363_"
            d="m68.087 317.223c-3.905-3.905-10.237-3.905-14.143 0s-3.905 10.237 0 14.143l13.989 13.989c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143z"
            fill="#ac6dff"/>
          <path
            id="XMLID_1497_"
            d="m366.877 345.361c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143l-14-14c-3.905-3.905-10.237-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143z"
            fill="#5ab735"/>
          <path
            id="XMLID_1510_"
            d="m443.92 317.223-13.989 13.989c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l13.989-13.989c3.905-3.905 3.905-10.237 0-14.143s-10.237-3.905-14.142 0z"
            fill="#ffaacb"/>
          <path
            id="XMLID_1563_"
            d="m101.939 250.419-14 14c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l14-14c3.905-3.905 3.905-10.237 0-14.143-3.905-3.905-10.237-3.905-14.142 0z"
            fill="#ffb400"/>
          <path
            id="XMLID_1565_"
            d="m395.925 250.419c-3.905 3.905-3.905 10.237 0 14.143l14 14c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143l-14-14c-3.905-3.905-10.237-3.905-14.142 0z"
            fill="cyan"
/>
          <path
            id="XMLID_1661_"
            d="m140.465 113.364-14 14c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l14-14c3.905-3.905 3.905-10.237 0-14.143-3.905-3.905-10.237-3.905-14.142 0z"
            fill="#ce2c16"/>
          <path
            id="XMLID_1662_"
            d="m203.518 113.369c-3.905 3.905-3.905 10.237 0 14.143l13.99 13.99c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143l-13.99-13.99c-3.904-3.905-10.237-3.905-14.142 0z"
          fill="#ffb400"/>
          <path
            id="XMLID_1758_"
            d="m280.561 127.364c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l14-14c3.905-3.905 3.905-10.237 0-14.143-3.905-3.905-10.237-3.905-14.143 0z"
          fill="#3728bf"/>
          <path
            id="XMLID_1789_"
            d="m385.746 127.359-13.99-13.99c-3.905-3.905-10.237-3.905-14.143 0s-3.905 10.237 0 14.143l13.99 13.99c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929c3.906-3.906 3.906-10.238.001-14.143z"
            fill="#ffaacb"/>
          <path
            id="XMLID_1801_"
            d="m474.653 389.305c51.627-84.602 50.587-193.744-7.661-278.268-3.134-4.547-9.361-5.693-13.909-2.56-4.548 3.134-5.694 9.361-2.56 13.909 52.191 75.735 54.551 172.916 10.925 249.924-19.237-6.257-40.475-1.388-55.225 13.362-6.514 6.514-15.175 10.102-24.388 10.102-9.212 0-17.873-3.588-24.387-10.102-21.245-21.245-55.814-21.246-77.059 0-13.448 13.447-35.327 13.447-48.775 0-10.292-10.292-23.975-15.959-38.529-15.959s-28.237 5.668-38.529 15.959c-13.447 13.448-35.328 13.447-48.774 0-14.56-14.559-35.968-19.516-55.189-13.351-50.88-89.988-38.044-206.526 38.533-283.103 80.541-80.542 206.957-92.167 300.586-27.645 4.548 3.134 10.774 1.988 13.909-2.56 3.134-4.547 1.988-10.774-2.56-13.909-101.578-70-238.712-57.395-326.077 29.97-48.352 48.352-74.981 112.64-74.981 181.02s26.629 132.667 74.981 181.019 112.639 74.981 181.019 74.981 132.667-26.629 181.02-74.981c14.179-14.179 26.376-29.676 36.583-46.112.327-.428.633-.879.894-1.37.057-.108.101-.218.153-.326zm-51.773 33.666c-92.016 92.017-241.738 92.017-333.754 0-10.269-10.269-19.384-21.261-27.361-32.807 10.735-1.719 21.919 1.693 29.875 9.649 21.245 21.246 55.814 21.245 77.059 0 13.446-13.447 35.327-13.448 48.774 0 10.623 10.623 24.576 15.934 38.529 15.934s27.907-5.311 38.529-15.934c13.447-13.448 35.328-13.447 48.774 0 21.245 21.245 55.814 21.246 77.059 0 8.064-8.064 19.19-11.462 29.915-9.692-8.006 11.585-17.14 22.591-27.399 32.85z"
          />
          <path
            id="XMLID_1802_"
            d="m429.953 92.144c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07-4.44-2.93-7.07-2.93-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93z"
          />
        </svg>
        {/* <h6>{this.state.fill}</h6> */}
      </div>
    );
  }
}
export default Donut;
