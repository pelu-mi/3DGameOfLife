import React, { useEffect } from "react";
import * as dat from "dat.gui";

const ControlsPanel = ({ spotlight, gameRules, onRuleChange }) => {
  useEffect(() => {
    const gui = new dat.GUI();
    const guiProps = {
      lightPosX: spotlight.position.x,
      generationTime: 1.0,
    };

    gui.add(guiProps, "lightPosX", 0, 100).onChange((value) => {
      spotlight.position.x = value;
    });

    gui.add(guiProps, "generationTime", 0, 3).onChange((value) => {
      gameRules.generationTime = value;
    });

    gui.add(gameRules, "rule", { "4555": "4555", "5766": "5766" }).onChange(onRuleChange);

    return () => gui.destroy();
  }, [spotlight, gameRules, onRuleChange]);

  return null; // GUI renders independently
};

ControlsPanel.propTypes = {
  spotlight: PropTypes.shape({
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  gameRules: PropTypes.shape({
    generationTime: PropTypes.number.isRequired,
    rule: PropTypes.string.isRequired,
  }).isRequired,
  onRuleChange: PropTypes.func.isRequired,
};

export default ControlsPanel;
