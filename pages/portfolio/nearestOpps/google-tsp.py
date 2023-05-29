# """Simple Vehicles Routing Problem (VRP).

#    This is a sample using the routing library python wrapper to solve a VRP
#    problem.
#    A description of the problem can be found here:
#    http://en.wikipedia.org/wiki/Vehicle_routing_problem.

#    Distances are in meters.
# """

from ortools.constraint_solver import routing_enums_pb2
from ortools.constraint_solver import pywrapcp


def create_data_model():
    # """Stores the data for the problem."""
    data = {}
    data['distance_matrix'] = [
                                [0, 85, 6546, 6201, 6283, 6320, 6321, 6347, 6410, 6111, 6478, 6899, 6791, 6681, 6911, 6557, 6450, 6769, 6648, 6703, 7223, 7136, 7264, 7486], 
                                [80, 0, 6460, 6116, 6198, 6235, 6235, 6262, 6325, 6025, 6392, 6814, 6705, 6595, 6826, 6471, 6364, 6683, 6562, 6618, 7138, 7050, 7179, 7400], 
                                [6425, 6345, 0, 796, 711, 557, 567, 546, 622, 808, 206, 1884, 1807, 1697, 1927, 1542, 1435, 1785, 1633, 1712, 3583, 3495, 3624, 3845], 
                                [6038, 5958, 799, 0, 244, 339, 349, 327, 567, 284, 731, 1327, 1250, 1140, 1370, 985, 878, 1228, 1076, 1155, 3026, 2938, 3067, 3288], 
                                [6122, 6042, 712, 202, 0, 252, 262, 241, 480, 294, 644, 1410, 1333, 1222, 1453, 1068, 961, 1311, 1159, 1237, 3109, 3021, 3149, 3371], 
                                [6154, 6074, 575, 336, 240, 0, 30, 80, 343, 252, 507, 1487, 1409, 1299, 1530, 1145, 1038, 1387, 1236, 1314, 3186, 3098, 3226, 3448], 
                                [6146, 6066, 593, 354, 269, 37, 0, 86, 361, 244, 525, 1505, 1428, 1317, 1548, 1163, 1056, 1405, 1254, 1332, 3204, 3116, 3244, 3466], 
                                [6174, 6094, 560, 324, 239, 76, 87, 0, 328, 273, 491, 1472, 1394, 1284, 1514, 1129, 1022, 1372, 1220, 1299, 3170, 3082, 3211, 3432], 
                                [6276, 6196, 568, 553, 468, 314, 324, 303, 0, 545, 500, 1642, 1564, 1454, 1684, 1299, 1192, 1542, 1390, 1469, 3340, 3252, 3381, 3602], 
                                [5952, 5872, 784, 325, 303, 255, 256, 282, 579, 0, 716, 1569, 1491, 1381, 1612, 1226, 1120, 1469, 1317, 1396, 3203, 3115, 3244, 3465], 
                                [6354, 6274, 208, 725, 640, 486, 496, 475, 551, 737, 0, 1813, 1736, 1626, 1856, 1471, 1364, 1714, 1562, 1641, 3512, 3424, 3553, 3774], 
                                [6872, 6792, 1910, 1336, 1459, 1554, 1564, 1543, 1678, 1553, 1842, 0, 584, 572, 704, 348, 633, 562, 365, 352, 2731, 2643, 2771, 2993], 
                                [6753, 6673, 1791, 1218, 1341, 1435, 1446, 1424, 1559, 1435, 1723, 571, 0, 248, 362, 657, 642, 22, 610, 486, 2464, 2376, 2505, 2726], 
                                [6560, 6480, 1598, 1024, 1147, 1242, 1252, 1231, 1366, 1241, 1530, 536, 235, 0, 373, 410, 394, 213, 362, 239, 2271, 2183, 2311, 2533], 
                                [6839, 6759, 1877, 1304, 1427, 1521, 1532, 1510, 1645, 1521, 1809, 657, 310, 370, 0, 731, 653, 288, 722, 598, 2550, 2462, 2591, 2812], 
                                [6524, 6444, 1562, 989, 1111, 1206, 1217, 1195, 1330, 1205, 1494, 342, 681, 446, 779, 0, 314, 658, 91, 225, 2481, 2393, 2522, 2743], 
                                [6448, 6368, 1486, 912, 1035, 1130, 1140, 1119, 1254, 1129, 1418, 606, 505, 435, 626, 313, 0, 483, 369, 308, 2281, 2194, 2322, 2544], 
                                [6731, 6651, 1769, 1196, 1318, 1413, 1423, 1402, 1537, 1412, 1701, 549, 22, 226, 340, 635, 620, 0, 587, 464, 2442, 2354, 2483, 2704], 
                                [6616, 6536, 1654, 1080, 1203, 1298, 1308, 1287, 1422, 1297, 1586, 374, 642, 407, 762, 92, 376, 620, 0, 211, 2573, 2485, 2614, 2835], 
                                [6706, 6626, 1744, 1170, 1293, 1388, 1398, 1377, 1512, 1387, 1676, 362, 494, 259, 632, 243, 319, 471, 234, 0, 2417, 2329, 2458, 2679], 
                                [7213, 7133, 3645, 3005, 3128, 3222, 3233, 3211, 3413, 3222, 3576, 2758, 2561, 2450, 2681, 2577, 2420, 2538, 2596, 2473, 0, 560, 376, 470], 
                                [6956, 6876, 3388, 2748, 2871, 2966, 2976, 2955, 3156, 2965, 3320, 2501, 2304, 2194, 2424, 2320, 2163, 2282, 2339, 2216, 575, 0, 696, 821], 
                                [7201, 7121, 3633, 2993, 3116, 3211, 3221, 3199, 3401, 3210, 3564, 2746, 2549, 2439, 2669, 2565, 2408, 2527, 2584, 2461, 370, 663, 0, 527], 
                                [7474, 7395, 3906, 3266, 3389, 3484, 3494, 3473, 3674, 3483, 3838, 3019, 2822, 2712, 2942, 2838, 2681, 2800, 2857, 2734, 446, 820, 542, 0]
                              ]
    data['num_vehicles'] = 12
    data['depot'] = 0
    return data


def print_solution(data, manager, routing, solution):
    # """Prints solution on console."""
    print(f'Objective: {solution.ObjectiveValue()}')
    max_route_distance = 0
    for vehicle_id in range(data['num_vehicles']):
        index = routing.Start(vehicle_id)
        plan_output = 'Route for vehicle {}:\n'.format(vehicle_id)
        route_distance = 0
        while not routing.IsEnd(index):
            plan_output += ' {} -> '.format(manager.IndexToNode(index))
            previous_index = index
            index = solution.Value(routing.NextVar(index))
            route_distance += routing.GetArcCostForVehicle(
                previous_index, index, vehicle_id)
        plan_output += '{}\n'.format(manager.IndexToNode(index))
        plan_output += 'Distance of the route: {}m\n'.format(route_distance)
        print(plan_output)
        max_route_distance = max(route_distance, max_route_distance)
    print('Maximum of the route distances: {}m'.format(max_route_distance))



def main():
    # """Entry point of the program."""
    # Instantiate the data problem.
    data = create_data_model()

    # Create the routing index manager.
    manager = pywrapcp.RoutingIndexManager(len(data['distance_matrix']),
                                           data['num_vehicles'], data['depot'])

    # Create Routing Model.
    routing = pywrapcp.RoutingModel(manager)


    # Create and register a transit callback.
    def distance_callback(from_index, to_index):
        """Returns the distance between the two nodes."""
        # Convert from routing variable Index to distance matrix NodeIndex.
        from_node = manager.IndexToNode(from_index)
        to_node = manager.IndexToNode(to_index)
        return data['distance_matrix'][from_node][to_node]

    transit_callback_index = routing.RegisterTransitCallback(distance_callback)

    # Define cost of each arc.
    routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)

    # Add Distance constraint.
    dimension_name = 'Distance'
    routing.AddDimension(
        transit_callback_index,
        0,  # no slack
        9000,  # vehicle maximum travel distance
        True,  # start cumul to zero
        dimension_name)
    distance_dimension = routing.GetDimensionOrDie(dimension_name)
    distance_dimension.SetGlobalSpanCostCoefficient(100)

    # Setting first solution heuristic.
    search_parameters = pywrapcp.DefaultRoutingSearchParameters()
    search_parameters.first_solution_strategy = (
        routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC)

    # Solve the problem.
    solution = routing.SolveWithParameters(search_parameters)

    # Print solution on console.
    if solution:
        print_solution(data, manager, routing, solution)
    else:
        print('No solution found !')


if __name__ == '__main__':
    main()