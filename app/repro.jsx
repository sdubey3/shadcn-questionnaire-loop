"use client";

import { Questionnaire } from "@shadcn/react/questionnaire";

export function Repro({ withInput }) {
  return (
    <Questionnaire.Root>
      <Questionnaire.Item name="material">
        <Questionnaire.Title>What is it made of?</Questionnaire.Title>
        <Questionnaire.Choices>
          <Questionnaire.Choice value="steel">
            <Questionnaire.ChoiceInput />
            <Questionnaire.ChoiceLabel>Steel</Questionnaire.ChoiceLabel>
          </Questionnaire.Choice>
          <Questionnaire.Choice value="aluminum">
            <Questionnaire.ChoiceInput />
            <Questionnaire.ChoiceLabel>Aluminum</Questionnaire.ChoiceLabel>
          </Questionnaire.Choice>
        </Questionnaire.Choices>
        {withInput ? <Questionnaire.Input placeholder="Something else" /> : null}
      </Questionnaire.Item>
    </Questionnaire.Root>
  );
}
