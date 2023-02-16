import React, { useState } from "react";

import "./styles.css";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const changeEnableState = () => {
    setTimeout(() => {
      setIsEnabled(!isEnabled);
    }, 500);
  };

  return (
    <div className={isEnabled ? "container-light" : "container-dark"}>
      <h1>Tecnicas de Rendering</h1>

      <div style={{ margin: 12 }}>
        <button
          onClick={changeEnableState}
          className={isEnabled ? "btn-light" : "btn-dark"}
        >
          {isEnabled ? "Encendido" : "Apagado"}
        </button>
      </div>

      <div
        className={
          isEnabled ? "container-light-paragrap" : "container-dark-paragrap"
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          viverra ultricies dignissim. Donec eu malesuada nisl. Cras gravida sed
          dui sit amet auctor. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Nam dapibus vitae nisl
          vitae sodales. Integer tristique metus eget placerat ultricies.
          Maecenas eu finibus diam. Donec massa turpis, dignissim eu enim quis,
          semper ullamcorper erat. Nullam id dapibus leo. Maecenas sollicitudin
          rhoncus imperdiet. Suspendisse tempus interdum sapien a iaculis.
          Integer blandit aliquet neque, et mattis ligula condimentum id. Duis
          eu iaculis lectus, in consectetur odio. Curabitur quis ipsum arcu.
          Etiam a mollis risus. Etiam vitae faucibus tortor, eu facilisis nulla.
          Morbi vestibulum ipsum mauris, vel interdum magna consectetur nec.
          Fusce varius nibh id lorem iaculis, ut fermentum tellus suscipit.
          Phasellus pretium purus id urna placerat scelerisque. Mauris dignissim
          nisi vel augue dapibus pharetra. Sed consequat, augue at pretium
          laoreet, turpis odio aliquam mauris, eget elementum mi turpis eu
          lacus. Integer nulla tortor, imperdiet nec felis eget, cursus sodales
          leo. Mauris porttitor sapien a nunc congue dignissim. Cras
          pellentesque quis nisi at cursus. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Sed placerat luctus sodales. Mauris ac dolor
          interdum, dictum turpis sit amet, pretium ipsum. In fringilla purus
          sit amet eros consequat, vel varius nunc interdum. Etiam maximus ante
          mi, ut blandit ligula rutrum quis. Pellentesque varius ex nec ligula
          convallis fringilla. Duis eget aliquam leo. Morbi finibus diam nec
          molestie suscipit. Nam euismod urna eget lectus mollis efficitur. Sed
          vel ligula luctus, vestibulum lorem vitae, scelerisque felis. Mauris
          non nisi id enim rhoncus tristique. Nullam blandit condimentum
          dapibus. Nullam feugiat ante non ipsum bibendum, a tempus libero
          gravida. Phasellus scelerisque est sed fringilla sodales. Phasellus
          dictum nisi porta ipsum semper finibus. Curabitur vel urna non odio
          congue vestibulum eu aliquet lorem. Vestibulum mattis justo quis velit
          efficitur tempus. Praesent eu erat in massa pretium rutrum sit amet ac
          tellus. Donec porta eget magna vitae dictum. Pellentesque mattis magna
          nec elit elementum, sed scelerisque ante vulputate. Nam eu nibh
          maximus, pulvinar leo at, hendrerit justo. Sed laoreet volutpat sapien
          vel pharetra.
        </p>
      </div>
    </div>
  );
};

export default App;
