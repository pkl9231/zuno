const errorMessage = require("../constants/errorMessage");

const inputParamsValidaton = (params) => {
  const {
    commissionContractId,
    channelCode,
    make,
    model,
    variant,
    idvcity,
    clusterZone,
    idv,
    registrationDate,
    typeOfBusiness,
    policyType,
    policyStartDate,
    policyTenure,
    transmissionType,
    automobileAssociationMember,
    typeOfGrid,
    contractDetails,
  } = params;

  // contractDetails[]-> contract{},
  //  coverage -> coverage{}, subCoverage[]
  const errorResponse = [];
  if (!commissionContractId) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "commissionContractId",
    });
  }
  if (!channelCode) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "channelCode",
    });
  }
  if (!make) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "make",
    });
  }
  if (!model) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "model",
    });
  }
  if (!variant) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "variant",
    });
  }
  if (!idvcity) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "idvcity",
    });
  }
  if (!clusterZone) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "clusterZone",
    });
  }
  if (!idv) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "idv",
    });
  }
  if (!registrationDate) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "registrationDate",
    });
  }
  if (!typeOfBusiness) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "typeOfBusiness",
    });
  }
  if (!policyType) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "policyType",
    });
  }
  if (!policyStartDate) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "policyStartDate",
    });
  }
  if (!policyTenure) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "policyTenure",
    });
  }
  if (!transmissionType) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "transmissionType",
    });
  }
  if (!automobileAssociationMember) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "automobileAssociationMember",
    });
  }
  if (!typeOfGrid) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "typeOfGrid",
    });
  }
  if (!contractDetails) {
    errorResponse.push({
      errorMessage: errorMessage.MISSING_REQUIRED_FIELD,
      attributeName: "contractDetails",
    });
  }
  if (contractDetails && !Array.isArray(contractDetails)) {
    errorResponse.push({
      errorMessage: errorMessage.UNEXPECTED_VALUES_RECEIVED,
      attributeName: "contractDetails",
    });
  }
  

  if (errorResponse?.length) {
    return errorResponse;
  }
};

module.exports = {
  inputParamsValidaton,
};
