"use client";

import type { ReactNode } from "react";
import { trText } from "../lib/tr-text";
import type { ModalField } from "./program-modal-config";
import type { ProgramModalValues } from "./program-modal-config";
import { ProgramFormFields } from "./program-form-fields";
import {
  getTamburCapacityCoatingSections,
  getTamburCapacityCompostingSections,
  getTamburCapacityCoolingSections,
  getTamburCapacityCustomSections,
  getTamburCapacityDryingSections,
  getTamburCapacityGranulationSections,
  getTamburCapacityMixingSections,
  getTamburCapacityModalDrumTypeField,
  getTamburCapacityModalSectionTitle,
  getTamburCapacitySterilizationSections,
} from "./tambur-capacity-modal-config";

type TamburCapacityModalFormProps = {
  values: ProgramModalValues;
  errors: Record<string, string>;
  onChange: (fieldId: string, value: string) => void;
};

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 md:p-5">
      <div className="inline-flex rounded-full border border-[#278DC0]/20 bg-[#278DC0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#154764]">
        {trText(eyebrow)}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-950">{trText(title)}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function TamburCapacityModalForm({
  values,
  errors,
  onChange,
}: TamburCapacityModalFormProps) {
  const drumType = values.drumType ?? "";
  const drumTypeField = getTamburCapacityModalDrumTypeField();
  const sectionTitle = getTamburCapacityModalSectionTitle(drumType);

  const renderGranulationFields = () => {
    const sections = getTamburCapacityGranulationSections();
    return sections.map((section) => {
      const visibleFields = section.fields.filter((field) => {
        if (field.id === "granulationCustomGranuleSize") {
          return values.granulationGranuleSize === "custom";
        }
        if (field.id === "granulationRecyclePercent") {
          return values.granulationRecycleMode === "yes" || values.granulationRecycleMode === "unknown";
        }
        if (field.id === "granulationResidenceTimeMin") {
          return values.granulationResidenceTimeMode === "manual";
        }
        if (field.id === "granulationManualDiameterMm") {
          return values.granulationDiameterMode === "manual";
        }
        if (field.id === "granulationManualLengthMm") {
          return values.granulationLengthMode === "manual";
        }
        if (field.id === "granulationManualSlopePercent") {
          return values.granulationSlopeMode === "manual";
        }
        if (field.id === "granulationManualRpm") {
          return values.granulationRpmMode === "manual";
        }
        return true;
      });

      return (
        <SectionCard key={section.id} eyebrow={section.eyebrow} title={section.title}>
          <ProgramFormFields
            fields={visibleFields}
            values={values}
            errors={errors}
            onChange={onChange}
          />
        </SectionCard>
      );
    });
  };

  const renderDryingFields = () => {
    const sections = getTamburCapacityDryingSections();
    return sections.map((section) => {
      const visibleFields = section.fields.filter((field) => {
        if (field.id === "dryingHotAirInletTemp" || field.id === "dryingHotAirOutletTemp") {
          return values.dryingHotAirKnown === "known";
        }
        if (field.id === "dryingResidenceTimeMin") {
          return values.dryingResidenceTimeMode === "manual";
        }
        if (field.id === "dryingManualDiameterMm") {
          return values.dryingDiameterMode === "manual";
        }
        if (field.id === "dryingManualLengthMm") {
          return values.dryingLengthMode === "manual";
        }
        if (field.id === "dryingManualSlopePercent") {
          return values.dryingSlopeMode === "manual";
        }
        if (field.id === "dryingManualRpm") {
          return values.dryingRpmMode === "manual";
        }
        if (
          [
            "dryingBurnerFuelType",
            "dryingBurnerCapacityMode",
            "dryingBurnerControlType",
            "dryingHotAirGeneration",
            "dryingDirectFlameContact",
          ].includes(field.id)
        ) {
          return values.dryingHasBurner === "yes" || values.dryingHasBurner === "engineering";
        }
        if (field.id === "dryingBurnerCapacityKw") {
          return values.dryingBurnerCapacityMode === "known";
        }
        if (field.id === "dryingAirFlowM3H") {
          return values.dryingAirFlowKnown === "known";
        }
        if (field.id === "dryingExhaustTemp") {
          return values.dryingExhaustKnown === "known";
        }
        return true;
      });

      return (
        <SectionCard key={section.id} eyebrow={section.eyebrow} title={section.title}>
          <ProgramFormFields
            fields={visibleFields}
            values={values}
            errors={errors}
            onChange={onChange}
          />
        </SectionCard>
      );
    });
  };

  const renderSectionSet = (
    sections: Array<{ id: string; eyebrow: string; title: string; fields: ModalField[] }>,
    visibilityMap?: (fieldId: string) => boolean,
  ) =>
    sections.map((section) => {
      const visibleFields = section.fields.filter((field) => (visibilityMap ? visibilityMap(field.id) : true));
      return (
        <SectionCard key={section.id} eyebrow={section.eyebrow} title={section.title}>
          <ProgramFormFields fields={visibleFields} values={values} errors={errors} onChange={onChange} />
        </SectionCard>
      );
    });

  const renderCoolingFields = () =>
    renderSectionSet(getTamburCapacityCoolingSections(), (fieldId) => {
      if (fieldId === "coolingAirFlowM3H") return values.coolingAirFlowKnown === "known";
      if (fieldId === "coolingResidenceTimeMin") return values.coolingResidenceTimeMode === "manual";
      if (fieldId === "coolingManualDiameterMm") return values.coolingDiameterMode === "manual";
      if (fieldId === "coolingManualLengthMm") return values.coolingLengthMode === "manual";
      if (fieldId === "coolingManualSlopePercent") return values.coolingSlopeMode === "manual";
      if (fieldId === "coolingManualRpm") return values.coolingRpmMode === "manual";
      return true;
    });

  const renderCoatingFields = () =>
    renderSectionSet(getTamburCapacityCoatingSections(), (fieldId) => {
      if (fieldId === "coatingViscosityCp") return values.coatingViscosityKnown === "known";
      if (fieldId === "coatingResidenceTimeMin") return values.coatingResidenceTimeMode === "manual";
      if (fieldId === "coatingManualDiameterMm") return values.coatingDiameterMode === "manual";
      if (fieldId === "coatingManualLengthMm") return values.coatingLengthMode === "manual";
      if (fieldId === "coatingManualSlopePercent") return values.coatingSlopeMode === "manual";
      if (fieldId === "coatingManualRpm") return values.coatingRpmMode === "manual";
      return true;
    });

  const renderCompostingFields = () =>
    renderSectionSet(getTamburCapacityCompostingSections(), (fieldId) => {
      if (fieldId === "compostingManualDiameterMm") return values.compostingDiameterMode === "manual";
      if (fieldId === "compostingManualLengthMm") return values.compostingLengthMode === "manual";
      if (fieldId === "compostingManualSlopePercent") return values.compostingSlopeMode === "manual";
      if (fieldId === "compostingManualRpm") return values.compostingRpmMode === "manual";
      return true;
    });

  const renderSterilizationFields = () =>
    renderSectionSet(getTamburCapacitySterilizationSections(), (fieldId) => {
      if (fieldId === "sterilizationManualDiameterMm") return values.sterilizationDiameterMode === "manual";
      if (fieldId === "sterilizationManualLengthMm") return values.sterilizationLengthMode === "manual";
      if (fieldId === "sterilizationManualSlopePercent") return values.sterilizationSlopeMode === "manual";
      if (fieldId === "sterilizationManualRpm") return values.sterilizationRpmMode === "manual";
      return true;
    });

  const renderMixingFields = () =>
    renderSectionSet(getTamburCapacityMixingSections(), (fieldId) => {
      if (fieldId === "mixingTimeMin") return values.mixingTimeMode === "manual";
      if (fieldId === "mixingLiquidKgPerTon") return values.mixingLiquidMode === "yes" || values.mixingLiquidMode === "unknown";
      if (fieldId === "mixingManualDiameterMm") return values.mixingDiameterMode === "manual";
      if (fieldId === "mixingManualLengthMm") return values.mixingLengthMode === "manual";
      if (fieldId === "mixingManualSlopePercent") return values.mixingSlopeMode === "manual";
      if (fieldId === "mixingManualRpm") return values.mixingRpmMode === "manual";
      return true;
    });

  const renderCustomFields = () =>
    renderSectionSet(getTamburCapacityCustomSections(), (fieldId) => {
      if (fieldId === "customInletMoisture") return values.customInletMoistureKnown === "yes";
      if (fieldId === "customOutletMoisture") return values.customOutletMoistureKnown === "yes";
      if (fieldId === "customResidenceTimeMin") return values.customResidenceTimeMode === "manual";
      if (fieldId === "customManualDiameterMm") return values.customDiameterMode === "manual";
      if (fieldId === "customManualLengthMm") return values.customLengthMode === "manual";
      if (fieldId === "customManualSlopePercent") return values.customSlopeMode === "manual";
      if (fieldId === "customManualRpm") return values.customRpmMode === "manual";
      return true;
    });

  return (
    <div className="space-y-5">
      <SectionCard eyebrow="Program alanı" title="Tambur Tipi Seçimi">
        <ProgramFormFields
          fields={[drumTypeField]}
          values={values}
          errors={errors}
          onChange={onChange}
        />
        <div className="mt-4 rounded-2xl border border-[#278DC0]/15 bg-[#278DC0]/5 px-4 py-3 text-sm leading-7 text-slate-600">
          {trText(
            "Tambur tipi seçildikten sonra yalnız seçtiğiniz prosese ait sorular açılır. Seçim kutusunda yalnız temiz tambur adı gösterilir; referans notları aşağıdaki özel alanlarda değerlendirilir.",
          )}
        </div>
      </SectionCard>

      {drumType ? (
        <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="inline-flex rounded-full border border-[#278DC0]/20 bg-[#278DC0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#154764]">
            {trText("Seçilen proses")}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-slate-950">{trText(sectionTitle)}</h3>
        </div>
      ) : null}

      {!drumType ? null : drumType === "granulation" ? (
        renderGranulationFields()
      ) : drumType === "drying" ? (
        renderDryingFields()
      ) : drumType === "cooling" ? (
        renderCoolingFields()
      ) : drumType === "coating" ? (
        renderCoatingFields()
      ) : drumType === "composting" ? (
        renderCompostingFields()
      ) : drumType === "sterilization" ? (
        renderSterilizationFields()
      ) : drumType === "mixing" ? (
        renderMixingFields()
      ) : drumType === "custom" ? (
        renderCustomFields()
      ) : (
        null
      )}
    </div>
  );
}
