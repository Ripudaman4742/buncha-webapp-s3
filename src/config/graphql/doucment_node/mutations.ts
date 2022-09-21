import {gql} from "@apollo/client"

export const TOGGLE_DRIVER = gql`
	mutation convertUserToDriver($userIds: [Int!]) {
		convertUserToDriver(userIds: $userIds)
	}
`

export const LOG_MANAGER = gql`
	mutation addOperationLogs(
		$apiName: String
		$parameters: JSON
		$response: JSON
		$hadError: Boolean
	) {
		addOperationLogs(
			apiName: $apiName
			parameters: $parameters
			response: $response
			hadError: $hadError
		)
	}
`

export const GENERATE_REFERRAL_PROMOCODE = gql`
	mutation generateBranchLinkPromocode(
		$discountCode: String!
		$redeemCode: String!
		$discountPercentage: Int
		$neighborhoodId: Int
		$communityId: Int
		$discountAmount: Int
		$minimumOrderPrice: Int
		$maxDiscountAmount: Int
		$startDate: Date
		$userJoinedDate: Date
		$expiryDate: Date
		$perUserUsageCount: Int!
		$note: String!
		$onlyForNewUser: Boolean
	) {
		generateBranchLinkPromocode(
			discountCode: $discountCode
			redeemCode: $redeemCode
			discountPercentage: $discountPercentage
			neighborhoodId: $neighborhoodId
			communityId: $communityId
			discountAmount: $discountAmount
			minimumOrderPrice: $minimumOrderPrice
			maxDiscountAmount: $maxDiscountAmount
			startDate: $startDate
			expiryDate: $expiryDate
			perUserUsageCount: $perUserUsageCount
			note: $note
			userJoinedDate: $userJoinedDate
			onlyForNewUser: $onlyForNewUser
		)
	}
`
export const GENERATE_PROMOCODE = gql`
	mutation generatePromocode(
		$promocode: String!
		$userId: Int
		$discountAmount: Int
		$discountPercentage: Int = 0
		$storeIds: [Int]
		$minimumOrderPrice: Int
		$maxDiscountAmount: Int
		$startDate: Date
		$expiryDate: Date
		$userJoinedDate: Date
		$type: discountType
		$note: String!
		$perUserUsageCount: Int!
		$onlyForNewUser: Boolean
	) {
		generatePromocode(
			promocode: $promocode
			userId: $userId
			discountAmount: $discountAmount
      		discountPercentage: $discountPercentage
			storeIds: $storeIds
			minimumOrderPrice: $minimumOrderPrice
			maxDiscountAmount: $maxDiscountAmount
			startDate: $startDate
			expiryDate: $expiryDate
			type: $type
			userJoinedDate: $userJoinedDate
			note: $note
			perUserUsageCount: $perUserUsageCount
			onlyForNewUser: $onlyForNewUser
		){
      discountCode
    }
	}
`

export const CreateDiscountCouponForUser = gql`
  mutation createDiscountCouponForUser(
    $promocode: String!
	$userId: Int!
	$discountAmount: Int!
	$discountPercentage: Int = 0
	$storeIds: [Int]
	$minimumOrderPrice: Int
	$startDate: Date
	$expiryDate: Date
	$type: discountType
	$note: String
	$orderItemIds: [Int]
	$perUserUsageCount: Int
	$maxDiscountAmount: Int
  ) {
    createDiscountCouponForUser(
      promocode: $promocode
      userId: $userId
      discountAmount: $discountAmount
      discountPercentage: $discountPercentage
      storeIds: $storeIds
      minimumOrderPrice: $minimumOrderPrice
      startDate: $startDate
      expiryDate: $expiryDate
      type: $type
      note: $note
	  orderItemIds: $orderItemIds
      perUserUsageCount: $perUserUsageCount
	  maxDiscountAmount: $maxDiscountAmount
    ) {
      discountCode
    }
  }
`;
